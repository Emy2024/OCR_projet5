import { useParams } from "react-router"
import ErrorPage from "../Error/index"
import Tagname from "../../components/Tagname"
import Accordion from "../../components/Accordion";
import Slideshow from "../../components/Slideshow"
import data from "../../data/logements.json"
import Star from "../../components/Star"

function Fichelogement(){

    const {id} = useParams()
    const dataLogementSelectionne = data.filter(logement => logement.id === id);
    console.log("Descriptif du logement-->", dataLogementSelectionne)

    if(dataLogementSelectionne.length === 0){
        return <ErrorPage />
    } 

    const dataLogement = dataLogementSelectionne[0]
    const title = dataLogement.title
    const location = dataLogement.location
    const tags = dataLogement.tags
    const description = dataLogement.description
    const rating = dataLogement.rating
    const hostName = dataLogement.host.name
    const hostNameSplit = hostName.split(" ")
    const hostPicture = dataLogement.host.picture
    const equipements = dataLogement.equipments

    return(
        <div className="pageLogement"> 
            {dataLogementSelectionne.map((item) => (
                <Slideshow 
                    key={item.id}
                    tabImages={item.pictures}
                />  
            ))} 

            <div className="information">
                <div className="information__header">
                        <h2>{title}</h2>
                        <p className='headerContainer__p'>{location}</p>   
                    
                        <div className="headerTagname">
                            <Tagname
                                array={tags}
                             />
                        </div>
                </div>

                <div className="information__sidecontent">
                    <div className="sidecontent">
                        <div className="sidecontent__Name">
                            <span>{hostNameSplit[0]}</span>
                            <span>{hostNameSplit[1]}</span>
                        </div>
                        <div className="sidecontent__Image">
                            <img className="hostImage" src={hostPicture} alt="Photographie du propriétaire"></img>
                        </div>
                    </div>
                    <div className="sidecontent__Stars">
                        <Star 
                            tableauRating = {rating}
                        />
                    </div>
                </div>

            </div>
            
            <div className="accordionsContainer">
                <div className='description'>
                    <Accordion
                        title={"Description"}
                        content={description}
                    />
                </div>
                <div className='equipement'>
                    <Accordion 
                        title={"Equipements"}
                        content={equipements}
                    />
                </div>
            </div> 
        </div>

    )
}
export default Fichelogement 

