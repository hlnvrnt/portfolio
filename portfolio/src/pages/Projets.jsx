import React from 'react';
import projets  from './AllProjets';
import ProjetCard from '../components/ProjetCard';

const Projets = () => {
    return (
        <div className="Mes-Projets">
            <h1>Mes Projets</h1>
            <h3>Découvrer mes premiers projets depuis septembre 2023 !</h3>
            <div className="projets-card">
             {projets.map((projet)=>(
                <ProjetCard
                 key={projet.id}
                 name={projet.name}
                 image={projet.image}
                 description={projet.description}
                 id={projet.id}
                 lien={projet.lien}
                />
            ))}
            </div>
            <div className="contact">
        <h2>Envie de travailler avec moi ?</h2>
        <button  onClick={(e) => {window.location.href ='mailto:helene.vernet@live.fr';}}>
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Me contacter</span>
</button>

        </div>   
        </div>
    );
};

export default Projets;