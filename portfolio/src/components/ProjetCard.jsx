import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import ProjetFaceOne from "./ProjetFaceOne";
import ProjetFaceTwo from "./ProjetFaceTwo";

function ProjetCard ( { image, name, description, id, lien }) {

    const [isFlipped, setIsFlipped] = useState(false); 

    const handleFlip = () => {
        setIsFlipped((current) => !current)
    }
    
    return (
<div className="projetCard">
<ReactCardFlip isFlipped={isFlipped}
        flipDirection="horizontal">
    <ProjetFaceOne id={id} image={image} name={name} handleFlip={handleFlip}/> 
    <ProjetFaceTwo name={name} description={description} lien={lien} handleFlip={handleFlip}/>
</ReactCardFlip>
</div>
    )
}

export default ProjetCard