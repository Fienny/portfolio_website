const MainAbout = () => {
    return (
        <div className="about_container" id="home">
            <div className="about_text">
                <p className="about_par">Hi everyone, I am</p>
                <p className="name">Sattorov Azizbek</p>
                <p className="about_textarea">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim quis adipisci nam numquam, provident dignissimos! 
                    Ullam, consectetur necessitatibus recusandae vel ut corporis illo sit mollitia minima quam eveniet modi.
                </p>
                <div className="about_btn"><a href="https://drive.google.com/file/d/1EounIQZMtHMhGU4NSiNYhYBqwVxjfnM7/view?usp=sharing" className="about_btn_text">Download Resume</a></div>
            </div>
            <div className="about_image">
                <img src="https://drive.google.com/uc?export=view&id=1Tj724ftEOl5yVpkzgLJz8rqtLfm8SfUr" alt="About" className="about_photo" />
            </div>
        </div>
    );
}

export default MainAbout;
