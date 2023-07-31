import HTML_ICON from "./icons/html-5-svgrepo-com.svg"
import CSS_ICON from "./icons/css-3-svgrepo-com.svg"
import JS_ICON from "./icons/js-svgrepo-com.svg"
import REACT_ICON from "./icons/react-svgrepo-com.svg"
import PYTHON_ICON from "./icons/python-svgrepo-com.svg"
import DJANGO_ICON from "./icons/django-icon-svgrepo-com.svg"
import POSTGRESQL_ICON from "./icons/postgresql-svgrepo-com.svg"
import SQLITE_ICON from "./icons/sqlite-svgrepo-com.svg"

const MainSkills = () => {
    return(
        <div className="skills_container" id="skills">
            <div className="skills_textbox">
                <h2 className="skills_text">Skills</h2>
                <p className="skills_head name">What am I capable of?</p>
            </div>
            <div className="skills_icons">
                <img src={HTML_ICON} alt="html" className="skills_icon" />
                <img src={CSS_ICON} alt="css" className="skills_icon" />
                <img src={JS_ICON} alt="css" className="skills_icon" />
                <img src={REACT_ICON} alt="css" className="skills_icon" />
                <img src={PYTHON_ICON} alt="css" className="skills_icon" />
                <img src={DJANGO_ICON} alt="css" className="skills_icon" />
                <img src={POSTGRESQL_ICON} alt="css" className="skills_icon" />
                <img src={SQLITE_ICON} alt="css" className="skills_icon" />
            </div>
        </div>
    );
}

export default MainSkills;