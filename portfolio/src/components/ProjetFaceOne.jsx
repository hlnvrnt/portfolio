import React from 'react';

const ProjetFaceOne = ({id, image, name, handleFlip}) => {
    return (
        <div onClick={handleFlip} className="faceOne-container">
           <div className="faceOne">
            <img src={image} alt="image"/>
            <h2>{name}</h2>
            </div> 
        </div>
    );
};

export default ProjetFaceOne;