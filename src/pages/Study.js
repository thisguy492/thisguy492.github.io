import { useState } from 'react';
import vocab from './data/vocab';



function MultyChoice(num_of_choices,word_as_answer){

  function NewEntries(num_of_choices){
    //Chooses all the definitions/words out of the whole bank randomly
    const solution_index = Math.floor(Math.random()*num_of_choices)
    const new_entries = []
    for(var i=0; i<num_of_choices; i++){
      const this_index = Math.floor(Math.random()*vocab.length)
      var correct = false
      if (i === solution_index) {correct=true}
      new_entries.push({"word": vocab[this_index]["word"], "definition": vocab[this_index]["definition"], "class_style": "nuetral", 
        "correct":correct, "vocab_index": this_index})
    }
    setEntries(new_entries)
  }



  //Chooses all the definitions/words out of the whole bank randomly
  //do this smarter, like if m=bad with word or not played in a while
  //also make sure not to have same word in one round
  const initial_entries = []
  for(var i=0; i<num_of_choices; i++){
    const solution_index = Math.floor(Math.random()*num_of_choices)
    const this_index = Math.floor(Math.random()*vocab.length)
    var correct = false
    if (i === solution_index) {correct=true}
    initial_entries.push({"word": vocab[this_index]["word"], "definition": vocab[this_index]["definition"], "class_style": "nuetral", 
                           "correct":correct, "vocab_index": this_index})
  }
  const [entries, setEntries] = useState(initial_entries);

  function GetStats(vocab_score,vocab_streak){
    var total_correct = 0
    var total_incorrect = 0
    var amount_known = 0
    var amount_tested = 0
    vocab_score.forEach(score=>{
      total_correct += score["correct"]
      total_incorrect += score["incorrect"]
      if (score["correct"]*.75 > score["incorrect"]) amount_known += 1
      if (score["last_played"] !== 0) amount_tested += 1;
    })

    return {"total_correct": total_correct, "total_incorrect": total_incorrect, "amount_tested": amount_tested, 
      "amount_known":amount_known, "streak": vocab_streak}
  }
  var vocab_score = JSON.parse(localStorage.getItem("VocabScore"));
  var vocab_streak = JSON.parse(localStorage.getItem("VocabStreak"));
  if (vocab_score === null){
    vocab_score = []
    for(i=0; i<vocab.length; i++)
      vocab_score.push({"correct":0,"incorrect":0,"streak":0,"last_played":0, "vocab_index": i})
  }
  if (vocab_streak === null)
    vocab_streak = 0
  localStorage.setItem("VocabScore",JSON.stringify(vocab_score));
  localStorage.setItem("VocabStreak",JSON.stringify(vocab_streak));
  const [stats, setStats] = useState(GetStats(vocab_score,vocab_streak))

  //determines what if the ansere is the word or def
  var a_type = ""
  var q_type = ""
  if(word_as_answer){ q_type = "definition";a_type = "word";}
  else{ q_type = "word";a_type = "definition";}


  //When clicked
  function Clicked(this_entry){
    if(this_entry["class_style"] === "nuetral"){
      //if no score stored set up score
      var vocab_score = JSON.parse(localStorage.getItem("VocabScore"));
      var vocab_streak = JSON.parse(localStorage.getItem("VocabStreak"));

      const this_index = this_entry["vocab_index"]
      if(this_entry["correct"]){
        vocab_score[this_index]["correct"] += 1
        vocab_score[this_index]["streak"] += 1
        vocab_streak += 1
        vocab_score[this_index]["last_played"] += new Date().getTime();
      }else{
        vocab_score[this_index]["incorrect"] += 1
        vocab_score[this_index]["streak"] = 0
        vocab_streak = 0
        vocab_score[this_index]["last_played"] += new Date().getTime();
      }
      const new_entries = []
      entries.forEach(entry=>{
        new_entries.push(entry)

        if(entry["correct"]){
          new_entries[new_entries.length-1]["class_style"] = "correct"
        }else{
          new_entries[new_entries.length-1]["class_style"] = "incorrect"
        }
      })
      setEntries(new_entries)

      localStorage.setItem("VocabScore",JSON.stringify(vocab_score));
      localStorage.setItem("VocabStreak",JSON.stringify(vocab_streak));
      setStats(GetStats(vocab_score,vocab_streak))
  
    }else{
      NewEntries(entries.length)
    }
  }

  return(
    <div>
      <h2>{JSON.stringify(stats)}</h2>
      <input type='number' value={entries.length} onChange={e=> { NewEntries(e.target.value)}} id="numb_of_choices"></input>
      <input type='checkbox'  id="word_as_answer" checked></input>
      <div id="def">{entries.map(entry =>{
        if(entry["correct"]){
          return entry[q_type]
        }
      }
        )}
      </div>
      <div class="cards">  
        {entries.map(entry => (<div key={entry["word"]} class={entry["class_style"]} onClick={()=>Clicked(entry)}>{entry[a_type]}</div>))}
      </div>
    </div>
  );
}
function Study() {
  return (
    <div>
      <h1>GRE Vocab</h1>
      {MultyChoice(10,true)}
    </div>
  );
}

export default Study;