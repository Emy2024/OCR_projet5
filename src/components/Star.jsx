import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Star(props){
  const tableauEtoiles = [...Array(5)]
  let iconEtoile = <FontAwesomeIcon icon ={faStar} />

  return(

    <div>
      {tableauEtoiles.map((_, indexTableauEtoiles) => (
        <span 
          key={indexTableauEtoiles}
          className={indexTableauEtoiles > props.tableauRating ? "stars-grey" : "stars-colored"}
          >
          {iconEtoile}
          </span>
      ))}

    </div>
  )
}

export default Star

