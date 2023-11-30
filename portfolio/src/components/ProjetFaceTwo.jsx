import React from 'react';

const ProjetFaceTwo = ({description, name, handleFlip}) => {
    return (
        <div onClick={handleFlip} className="faceTwo-container">
        <div className="faceTwo">
         <h2>{name}</h2>
         {description}
         </div> 
     </div>
    );
};

export default ProjetFaceTwo;