import { Outlet} from "react-router-dom";
import NASAPics from ".//imgs/NASAPics.png"
import CodingPics from ".//imgs/CodingPics.png"
import RockInTest from ".//imgs/RockInTest.jpg"
import Teambottle from ".//imgs/Teambottle.JPG"
import OnlineGames from ".//imgs/OnlineGames.png"
import MeAndTire from ".//imgs/MeAndTire.png"
import PillVid from ".//imgs/PillVid.mp4"
import Tireimg from ".//imgs/Tire.png"


const Card = (title,text, pic,pic_caption) => {

    return( 
 <div class="project all">
    <h1>{title}</h1>
    <div>
        <div>
            <p>{text}</p>
        </div>
        <div>
            <img class="img" src={pic} alt={pic_caption}></img>
            <p class="imgp">{pic_caption}</p>
        </div>
    </div>
</div>
    )
};

const Website = () => {

    return( 
    <div>
        <div class="project">
                <h1>Websites</h1>
                <div>
                    <div>
                        <p>The first code I published is called <a target="blank" href="/cube">3d cube painter</a>. The goal was for me to create a 3d viewer without any outside help. Once I made it I realized that I needed something to view so I added a feature so you can place cubes and the world. Unsuprisingly when you make a solution to a problem (3d graphics) that has been solved many times by proffessionals, you end up making something less than optimal. No matter how "janky" I am immensely proud of this project and was able to create some really cool effects. My only real regret is not making the instructions clear enough, good luck figuring them out!</p>
                        <p>My second published code was my take on a more traditional website. I wanted to handcraft my own site that I can use to play multiplayer board games with my friends. After so many hours learning how to make a server, link to a database, and make connections with other computers, my website was complete. And my friends I used it like 3 times....... nonetheless I am extremely glad that I made it, I learned A LOT about webdesign and the few times I played with my friends were fun. I do plan on updating it to look nicer (and remove the profanity my friends put) in the future so I will unfortunetly not be providing a link to it at the moment.</p>
                        <p>Lastly the website you are visiting now is the personal project that I am most proud of. In adition to a it being a way for mw to catoloag my experience and projects, this site acts as a convient place I can put any java scrtipt I'd like to quickly and easily share with anyone. So far I have used it to do rock transofrm and lammps stuff</p>
                    </div>
                    <div class="big_img">
                        <img src={CodingPics} alt="Pictures from my website"></img>
                        <p>Top Left: Menu Screen of Secret Names Game (my knock off version of the board game codenames)<br></br>
                            Top Right: What a typically game of Secret Names Game looks like from the perspective of an Encoder <br></br>
                            Bottom Left: In game view at the end of a blockers game, between 3 player Q, Matt, and X <br></br>
                            Bottom Right: In game view during a game of Wolf (my take on One Night Ultimate Werewolf)
                        </p>
                    </div>
                </div>
            </div>    
    </div>
    )
};

const Rock = () => {
    return(
                    <div class="project">
                <h1>NASA Synthetic Sensor-Embedded Moon Rock Design and Manufacturing</h1>
                <h2>Senior Capstone at University of Delaware</h2>
                <div>
                    <div>
                        <p>Over the course of a semster I worked with 4 other students to design a manufacturing plan to create cheap synthetic moon rocks capable of logging force interactions. To aid in rover wheel testing at NASA Glenn Research Center</p>
                        <p>This project included researching deep into the relevant mechanical properties of moon rocks and ways to replacate them. The team needed to design a system capable of joining two halves of a synthetic rock without effecting the load read by the sensor and create appropraite testing methods without access to actual moon rocks.</p> 
                        <p>To help with certain aspects of this project I delevoped a web application called <a href="/rock_transform">Rock Transform</a>, more details about the web application can be found on it's portion of this site <a href="/rock_transform">here</a>.</p>
                        <p>After a semester long process the team was able to travel to NASA Glenn Research Center to test the synthetic rocks with Glenn's advanced machinary. Although the product did not work perfectly, the team met many important metrics and laid a strong foundation for any NASA team looking to continue with this work.</p>
                    </div>
                    <div class="big_img">
                        <img src={NASAPics} alt="various pics"></img>
                        <p>Top Left: Me Taking a Selfie at SLOPE lab in NASA Glen Research Center</p>
                        <p>Top Right: Synthetic Rock prototype inside of testing rig at the University</p>
                        <p>Bottom Left: Synthetic Rock prototype inside of a more advanced testing rig at NASA Glenn Research Center</p>
                        <p>Bottom Right: Team Photo while touring NASA Glenn</p>
                    </div>
                </div>
            </div>
    )
};

const Pill = () => {
    return (
                    <div class="project">
                <h1>Pill Bottle Fill Station</h1>
                <h2>Junior Design Project at University Of Delaware</h2>
                <div>
                    <div>
                        <p>Junior Year we were given a 20"x20"x40" of 8-20 framing, a small budget and, a goal, to automatically fill and cap 12 pill bottles with exactly 30 pills each. Over the course of a year some teams made it and some did not, fortunetly my team was able to see it through and show the judges of our showcase our final working protype.</p>
                        <p>This project had us working in large groups, upwards of 10 members. Naturally with a large team and a large problem it was broken into smaller parts; bottle Conveyance, bottle filling, and bottle capping/screwing. I was a part of the bottle conveyance team, responsible for the motion of the bottles into, through, and out of the system.</p>
                        <p>In addition to bottle conveyance I was an essentail part during concept generation, manufacturing the physical prototype, and creating the code. I was the sole contributor to the code that runs every part of the machine. Although looking back at the code now makes me shudder, I am still very proud of creating the nessary pieces and the extra features.</p>
                 
                    </div>
                    <div class="big_img">
                        <video controls loop  muted>
                            <source src={PillVid} alt="Video Of Pill Bottle Fill Station filling 12 bottles with 30 pills each and capping them" type="video/mp4"></source>
                            Video Of Pill Bottle Fill Station filling 12 bottles with 30 pills each and capping them
                          </video>
                        <p>The video shows the full system completing the goal of 12 bottle, 30 pills each, capped and ready to go. The video is sped up x4 for your convience, this process typically takes 2.5 minutes.</p>
                    </div>
                </div>
            </div>
    )
};

const Tire = () => {
    return (
            <div class="project">
            <h1>NASA Airless Flexible Tire</h1>
            <h2>Senior Design Project at University Of Delaware Part 2</h2>
            <div>
                <div>
                    <p>Words words words - show report show code and show instructions for code</p>
                </div>
                <div class="big_img">
                   <img src={Tireimg} alt="Airless flexible tire with the camrea mount inside"></img>
                    <p>The airless flexible tire with the camrea mount inside</p>
                </div>
            </div>
        </div>
    )
};

const All=() =>{
  return (
    <div>
        <Outlet />
        <div class="container_container">
        <div class="container projects">

        <a href="/projects/rock">
            {Card("NASA Synthetic Sensor-Embedded Moon Rock Design and Manufacturing",
            "Over the course of a semster I worked with 4 other students to design a manufacturing plan to create cheap synthetic moon rocks capable of logging force interactions. To aid in rover wheel testing at NASA Glenn Research Center",
            RockInTest,
            `Synthetic Rock prototype inside of testing rig at the University`)}
        </a>

        <a href="/projects/pill">
            {Card("Pill Bottle Fill Station",
            'Junior Year we were given a 20"x20"x40" of 8-20 framing, a small budget and, a goal, to automatically fill and cap 12 pill bottles with exactly 30 pills each. Over the course of a year some teams made it and some did not, fortunetly my team was able to see it through and show the judges of our showcase our final working protype',
            Teambottle,
            `The team posing with the final iteration of the device`)}
        </a>

        <a href="/projects/websites">
            {Card("Websites",
            'Before this site I created two different websites. One to challenge myself with 3D graphics and another to have a place my friends I can play board games online. Neither showcase my design skills but I am nonetheless immesly proud of the final results.',
            OnlineGames,
            "Home Screen of my board game website")}
        </a>

        <a href="/projects/tire">
            {Card("NASA Flexible Tire",
            "As an extension of my teams senior design project, we were tasked with creating a device capable of sensing the footprint and pressure map from a Airless flexible tire that does not affect the results",
            MeAndTire,
            "Me happily posing with the airless flexible tire NASA provided for us to test with")}
        </a>

        </div>
        </div> 
      
    </div>
  );
}
export default {All, Website, Rock, Pill, Tire};
export {All, Website, Rock, Pill, Tire} 