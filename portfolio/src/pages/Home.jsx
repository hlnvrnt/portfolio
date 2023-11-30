import React from 'react';
import projets  from './AllProjets';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
    <div className="home">
        <div className="description">
        <div className="text">
            <h1>Hélène Vernet</h1>
            <h2>Développeur web</h2>
            <div className="techno">
            <p>React.js</p>
            <p>Javascript</p>
            <p>Sass</p>
            <p>Express - MySQL</p>
            </div>
            <div className="etudes">
                <p>Titre Développeur web et web mobile - titre RNCP niveau 5</p>
                <p>Wild Code School, Nantes</p>
            </div>
        </div>
        <div className="image">
        <img src="/images/portrait.jpg" alt="portrait"/>
        </div>
        </div>
        <div className="skills">
            <div>
            <img src="/images/terminal.png" alt="terminal"/>    
            <h2>Fullstack</h2>
            <p>J'apprends pendant ma formation le frontend et le backend. J'ai choisi  le cursus spécialisé en Javascript.</p>
            </div>
            <div>
            <img src="/images/united.png" alt="team"/>      
            <h2>Team Player</h2>
            <p>Travailler en équipe, partager et s'entraider sont des valeurs qui me tiennent à coeur.</p>
            </div>
            <div>
            <img src="/images/strategy.png" alt="strategy"/>      
            <h2>User experience</h2>
            <p>Etant à la pace de l'utilisateur dans mon ancien métier, c'est très important pour moi de ne pas oublier les besoins et l'identié du client lors des projets.</p>
            </div>
        </div>
        <div className="projets-container"> 
        <div className="link-projet">
        <NavLink to ="/projets" ><h1>Mes Projets</h1></NavLink>
        </div>
        <div className="projets">
            {projets.map((projet)=>(
                <div key={projet.id} className="each-projet">
                    <h2>{projet.name}</h2>
                    <img src={projet.image} alt="image-projet"/>
                </div>
            ))}
        </div>
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

export default Home;