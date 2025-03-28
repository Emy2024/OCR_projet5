import Banner from "../../components/Banner";
import picture_mountain from "../../assets/vue_montagne.webp";
import Accordion from "../../components/Accordion";
import aproposData from "../../data/apropos.json"

function Apropos() {
    
    return (
        <>
            <Banner 
                alt={"Photographie d'une montagne et d'un lac"}       
                src={picture_mountain}
                name=" "   
            />
            
            <div className="maincontent">
                {aproposData.map((element, index) => (
                    <Accordion
                        key={index}
                        title={element.title}
                        content={element.paragraph}
                    />
                ))}
            </div>

        </>
    )
}

export default Apropos 

