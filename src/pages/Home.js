
import Typewriter from "./elements/TypeWriter";
function Home() {

  return (
    <div>
        <div class="MainTitle">
      <h1>HI! <Typewriter text="Welcome To My Website" delay={100} offset={0} /> </h1>
        </div>

        <div className="ThisMe">
            <p>This is Me</p>
        </div>

    </div>

  );
}

export default Home;