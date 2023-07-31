const Header = () => {
    const clicked_link = (event) => {
        let elems = document.getElementsByClassName("nav_list_item_link")
        for(let i=0; i<elems.length; i++){
            if (elems[i].classList.contains('clicked')){
                elems[i].classList.remove('clicked');
            }
        }
        event.currentTarget.classList.add('clicked');
    }

    return(
        <header>
            <div className="header_container">
                <div className="name_bar">
                    <p className="name">Sattorov Azizbek</p>
                </div>
                <nav className="nav_bar">
                    <ul className="nav_list">
                        <li className="nav_list_item"><a href="#home" className="nav_list_item_link" onClick={clicked_link}>Home</a></li>
                        <li className="nav_list_item"><a href="#about" className="nav_list_item_link" onClick={clicked_link}>About</a></li>
                        <li className="nav_list_item"><a href="#skills" className="nav_list_item_link" onClick={clicked_link}>Skills</a></li>
                        <li className="nav_list_item"><a href="#projects" className="nav_list_item_link" onClick={clicked_link}>Projects</a></li>
                        <li className="nav_list_item"><a href="#contact" className="nav_list_item_link" onClick={clicked_link}>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <span className="underscore"></span>
        </header>
    );
}

export default Header;