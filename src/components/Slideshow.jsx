import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Slideshow(props){
    const iconChevronRight = <FontAwesomeIcon icon ={faChevronRight} />
    const iconChevronLeft = <FontAwesomeIcon icon ={faChevronLeft} />

    const [currentIndex, setCurrentIndex] = useState(0) 
    const [sizeTable] = useState(props.tabImages.length) // taille tableau
    const [indexMax] = useState(props.tabImages.length -1) // taille max tableau

    // Fonction précédent
    function previous(){
        setCurrentIndex(currentIndex-1)
        if(0 == currentIndex){
            setCurrentIndex(indexMax)
        }
    }
    
    // Fonction suivant
    function next(){
        setCurrentIndex(currentIndex+1)
        if(indexMax == currentIndex){
            setCurrentIndex(0)
          }
        //console.log("Next -->", currentIndex)
        //console.log("tabImages -->", indexMax)
    }

    // Cache les chevrons si indexMax à 0
    function displayChevron(){
        if(indexMax == 0){
            //console.log("index max -->", indexMax)
            return("hide")
        } 
    } 

    //Animation du slider
    useEffect(() => {
    const interval = setInterval(() => {
        next();
    }, 3000);

    return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, [currentIndex, 3000]);

   
    return (
        <div className="slideshow">
            <div className={displayChevron()}>
                <div className="slideshow__legend">
                    <p>{currentIndex+1}/{sizeTable}</p>
                </div>
            </div>
            <div className={displayChevron()}>
                <div 
                    className="slideshow__icon slideshow__icon__left" 
                    onClick={previous}
                    >
                    {iconChevronLeft}
                </div>
                <div 
                    className="slideshow__icon slideshow__icon__right" 
                    onClick={next} 
                    >
                    {iconChevronRight}
                </div> 
            </div>
             <img className="slideshow__pictures" src={props.tabImages[currentIndex]} alt="appartement à louer"></img>  
        </div>
    )
}
export default Slideshow

