
import Typewriter from "./elements/TypeWriter";
import Matt from ".//imgs/MAtt.gif"


function Home() {
    class typewriterclass{
    constructor(text, delay, offset){
        this.text = text
        this.delay = delay
        this.offset = offset
        this.end = ((text.length+1) * delay)+offset
        }
    }
    const maintitle = new typewriterclass("Welcome To My Website!", 100, 0)
    const thisme = new typewriterclass("This me -->", 0, maintitle.end+300)
  return (
    //<div  style={{backgroundImage:  `url(${background})`, backgroundSize: "100% 100%", width: "100%", height: "100%", zIndex: -2, opacity: .5}}>
    <div>
    
        <div class="MainTitle" >
            <h1>HI! <Typewriter typewriterclass={maintitle} /> </h1>
        </div>

        <div className="ThisMe" style={{position: "fixed", top: "40%", left: "50%"}}>
            <Typewriter typewriterclass={thisme} />
        </div>

        <div style={{position: "fixed", top: "40%", left: "1%", fontSize: "20px", width: "100%",padding: "0px", margin: "0px"}}>
            <ul>
                <li class="homelist"><a href="/projects">Projects</a><p class="hide">     Click here to see my favorite projects</p></li>
                <li class="homelist"><a href="/resumes">Resume</a><p class="hide">     Here to see my professional resume</p></li>
                <li class="homelist"><a href="/about">About Me</a><p class="hide">     Click here if you'd like to get to know me some more</p></li>
                <li class="homelist"><a href="/contact">Contact</a><p class="hide">     Let's Chat! Click here to get in contact</p></li>
            </ul>
        </div>
        <div style={{position: "fixed", top: "15%", left: "50%",height: "100%", width: "50%", zIndex: -1}}>
            <img src={Matt} alt="My twin 3d model" style={{objectFit: "contain"}}></img>
        </div>
</div>
   // </div>

  );
}

export default Home;