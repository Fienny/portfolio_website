import Project from "./Project";
import image_1 from "./images/image 1.png"
import image_2 from "./images/image 2.png"
import image_3 from "./images/image 3.png"
import image_4 from "./images/image 4.png"
import image_5 from "./images/image 5.png"
import image_6 from "./images/image 6.png"

const MainProjects = () => {
    return (
        <div className="projects_container" id="projects">
            <p className="projects_pretitle skills_text">
                Projects
            </p>
            <h4 className="projects_title name">
                What have I created?
            </h4>
            <div className="projects_projects">
                <Project img={image_1} title={"Portfolio Website Design"} link={"#"} link_name="Figma" />
                <Project img={image_2} title={"Portfolio Website Design"} link={"#"} link_name="Figma" />
                <Project img={image_3} title={"Portfolio Website Design"} link={"#"} link_name="Figma" />
                <Project img={image_4} title={"Portfolio Website Design"} link={"#"} link_name="Figma" />
                <Project img={image_5} title={"Portfolio Website Design"} link={"#"} link_name="Figma" />
                <Project img={image_6} title={"Portfolio Website Design"} link={"#"} link_name="Figma" />
            </div>
        </div>
    );
}

export default MainProjects