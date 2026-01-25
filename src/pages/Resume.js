import Resumepdf from ".//imgs/Resume.pdf"
import Resumepng from ".//imgs/Resume.png"
function Resume() {
    return (
        <div class="projects">
            <div class="project">
            <a href={Resumepdf} target="_blank" rel="noreferrer"><img src={Resumepng} alt="myresume"></img></a>
            </div>
        </div>
        
    )
}

export default Resume;