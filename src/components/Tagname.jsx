function Tagname(props){
    return(
        <>
        {props.array.map((item, index) => (
              <div key={index}  className="tagname">
              <div className="tagname__button">{item}</div>
          </div>
        ))}
      
        </>
    )
}

export default Tagname

