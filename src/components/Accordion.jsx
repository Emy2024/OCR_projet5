import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Accordion(props){

    const [isPanelVisible, setIsPanelVisible] = useState(false)
   
    function classIcon(){
        if(isPanelVisible){
            return "accordion__icon"
        } else {
            return "accordion__icon-rotate"
        }
    }

    function classAccordion(){
        if(isPanelVisible){
            return "accordion__open"
        } else {
            return "accordion"
        }
    }

    const iconChevron = <FontAwesomeIcon icon ={faChevronUp} />

    return(
        <div className={classAccordion()}>
            <button className="accordion__button">
                {props.title}
                <div className='accordion__icon-container'>
                    <div className={classIcon()}
                        onClick={() => setIsPanelVisible(!isPanelVisible)}
                    >
                    {iconChevron}
                    </div>
                </div>
            </button>
            <div className={`accordion__panel ${isPanelVisible ? "accordion__panelVisible" : "accordion__panelHidden"}`}>
                {Array.isArray(props.content) ? 
                    props.content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) 
                    : 
                    props.content
                }
        </div>

        </div> 
    )
}

export default Accordion; 
