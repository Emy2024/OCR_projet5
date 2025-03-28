import Banner from '../../components/Banner'
import Card from '../../components/Card'
import picture_ocean from '../../assets/vue_ocean.webp'
import data from '../../data/logements.json'
import { Link } from 'react-router'

function Home() {
    return (
        <>
            <Banner  
                alt={"Photographie de l'océan et d'une falaise"}       
                src={picture_ocean}   
                name= "Chez vous, partout et ailleurs"     
            />       

            <ul className='cards'> 
                {data.map((logement) => {
                    return (
                       <li key={logement.id} className='cards__individualCard'>
                            <Link to={`/fiche-logement/${logement.id}`}>
                                <Card
                                    cover={logement.cover}
                                    title={logement.title} 
                                />
                            </Link>  
                        </li>
                    )
                })}
            </ul>    
        </>
    )
}
 
export default Home 