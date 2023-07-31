import DESCRIPTION_IMAGE from "./icons/desc_img.png"

const MainDescription = () => {
    return (
        <div className="desc_container" id="about">
            <div className="desc_img">
                <img src={DESCRIPTION_IMAGE} alt="Description" />
            </div>
            <div className="desc_textbox">
                <h3 className="desc_title">
                    About Me
                </h3>
                <p className="desc_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis, voluptas et in error ea alias, nulla, aperiam ducimus quia culpa aliquid ipsum sed consectetur debitis voluptates sunt illo ad.
                </p>
            </div>
        </div>
    );
}

export default MainDescription