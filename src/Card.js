function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.image} className="card-image"/>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <h3>{props.sub_title}</h3>
            <p className="card-desc">
                {props.desc}
            </p>
            <p className="btn-parent">
            <button className="card-btn">{props.button}</button>
            </p>
        </div>
    )
}

export default Card;