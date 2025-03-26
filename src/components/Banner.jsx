function Banner(props){
    return(
        <div className='banner'>
            <img alt={props.alt} src={props.src} className='banner__image'/> 
            <h1 className='banner__text'>{props.name}</h1>
         </div>
    )
}

export default Banner

