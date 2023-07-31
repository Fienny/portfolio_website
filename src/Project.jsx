const Project = (props) => {
    return (<div className="project_container">
        <img src={props.img} alt={props.title} className="project_img" />
        <p className="project_title">{props.title}</p>
        <p className="project_link"><a href={props.link}>{props.link_name}</a></p>
    </div>)
}

export default Project