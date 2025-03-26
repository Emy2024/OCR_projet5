function Card(props){
    return(
        <div>
            <div className="card__overlay"></div>
            <div className="card">
                <img className="card__image" src={props.cover} alt={"_"+props.title}/>
                <p className="card__title">{props.title}</p>
            </div>
        </div>
    )
}

export default Card
