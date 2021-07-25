import React from 'react';
import PropTypes from 'prop-types';
import './connexion.scss';

const Connexion = ({
  handleSelectConnexion,
  handleSelectInscription,
  connexionSelect,
  inscriptionSelect,
}) => {
  
  return (
    <div className="connexion">
      <h1 className={inscriptionSelect ? 'connexion__title active' : 'connexion__title'}> Inscription </h1>
      <h1 className={connexionSelect ? 'connexion__title active' : 'connexion__title'}> Connection </h1>
      <div className="connexion__container">
        <div className="connexion__container_top" >
          <button className="connexion__container_top-link active" 
                  data-ref="connexion" 
                  href="#" 
                  onClick={() => (handleSelectConnexion())}>Connexion</button>
          <button className="connexion__container_top-link" 
                  data-ref="inscription" 
                  href="#" 
                  onClick={() => (handleSelectInscription())}>Inscription</button>
        </div>

        <div className="connexion__container_body">

          <form className={connexionSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'} action="">
            <div className="connexion__container_body-row">
            <i className="far fa-envelope"></i>
              <input type="email" className="input" placeholder="Adresse Mail"/>
            </div>
            <div className="connexion__container_body-row">
              <i className="fas fa-lock"></i>
              <input placeholder="Mot de Passe" type="password" className="input"></input>
            </div>
            <a href="#" className="link">Mot de passe oublié ?</a>
            <button className="connexion__btn" type="button">Connexion</button>
          </form>
          
          <form className={inscriptionSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'} action="">
            <div className="connexion__container_body-row">
              <i className="far fa-envelope"></i>
              <input type="email" className="input" placeholder="Adresse Mail"/>
            </div>
            <div className="connexion__container_body-row">
              <i className="far fa-user"></i>
              <input type="text" className="input" placeholder="Pseudo"/>
            </div>
            <div className="connexion__container_body-row">
              <i className="fas fa-lock"></i>
              <input type="password" className="input" placeholder="Mot de passe"/>
            </div>
            <div className="connexion__container_body-row">
              <div>captcha à faire une fois le domaine fait</div>
            </div>
            <button className="connexion__btn" type="button">Inscription</button>
          </form>
        </div>

        </div>
        </div>
  
  );
  
}

Connexion.propTypes = {
  handleSelectConnexion: PropTypes.func.isRequired,
  handleSelectInscription: PropTypes.func.isRequired,
  connexionSelect: PropTypes.bool.isRequired,
  inscriptionSelect: PropTypes.bool.isRequired,
}

export default Connexion;
