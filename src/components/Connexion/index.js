import React from 'react';
import { Redirect } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from 'prop-types';
import './connexion.scss';

const Connexion = ({
  handleSelectConnexion,
  handleSelectInscription,
  handleSelectPassword,
  connexionSelect,
  inscriptionSelect,
  newConnexionEmail,
  setNewConnexionEmail,
  newConnexionPassword,
  setNewConnexionPassword,
  newRegisterEmail,
  setNewRegisterEmail,
  newRegisterPseudo,
  setNewRegisterPseudo,
  newRegisterPassword,
  setNewRegisterPassword,
  manageSubmitRegister,
  manageSubmitConnexion,
  manageSubmitPassword,
  isLogged,
  passwordMissSelect,
  notification,

}) => {
  const handleSubmitRegister = (evt) => {
    evt.preventDefault();

    manageSubmitRegister();
  };

  const handleSubmitConnexion = (evt) => {
    evt.preventDefault();

    manageSubmitConnexion();
  };

  const handlePasswordConnexion = (evt) => {
    evt.preventDefault();

    manageSubmitPassword();
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="connexion">
      <h2 className={inscriptionSelect ? 'connexion__title active' : 'connexion__title'}> Inscription </h2>
      <h2 className={connexionSelect ? 'connexion__title active' : 'connexion__title'}> Connexion </h2>
      <h2 className={passwordMissSelect ? 'connexion__title active' : 'connexion__title'}> Mot de passe oublié </h2>
      {isLogged
        && (
        <div className="connexion__container">
          <div className="connexion__container_body">
            Vous êtes connectés.
            <Redirect to="/" />
          </div>
        </div>
        )}
      <div className="connexion__container">
        <div className="connexion__container_top">
          <button
            type="button"
            className={connexionSelect ? 'connexion__container_top-link active' : 'connexion__container_top-link'}
            data-ref="connexion"
            href="#"
            onClick={() => (handleSelectConnexion())}
          >Connexion
          </button>
          <button
            type="button"
            className={inscriptionSelect ? 'connexion__container_top-link active' : 'connexion__container_top-link'}
            data-ref="inscription"
            href="#"
            onClick={() => (handleSelectInscription())}
          >Inscription
          </button>
        </div>

        <div className="connexion__container_body">
          <div className={notification ? 'notification-connexion active' : 'notification-connexion'}>
            {notification && (
            <span className="info">
              <i className="bi bi-check-circle-fill" />
              Votre compte a bien été crée, vous pouvez vous connecter
            </span>
            )}
          </div>
          <form
            className={connexionSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'}
            onSubmit={(evt) => handleSubmitConnexion(evt)}
            type="submit"
            method="POST"
          >
            <div className="connexion__container_body-row">
              <i className="bi bi-envelope" />
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newConnexionEmail}
                onChange={(evt) => setNewConnexionEmail(evt.target.value)}
              />
            </div>
            <div className="connexion__container_body-row">
              <i className="bi bi-lock" />
              <input
                placeholder="Mot de Passe"
                type="password"
                className="input"
                value={newConnexionPassword}
                onChange={(evt) => setNewConnexionPassword(evt.target.value)}
              />
            </div>
            <a
              href="#"
              className="link"
              onClick={() => (handleSelectPassword())}
            >Mot de passe oublié ?
            </a>
            <div className="connexion__container_recaptcha">
              <ReCAPTCHA
                sitekey="6LcjZ1YcAAAAAE4ZejaOx5KP5ku69juXsbLhAsZ8"
                onChange={onChange}
              />
            </div>
            <button className="connexion__btn" type="submit">Connexion</button>
          </form>

          <form
            className={inscriptionSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'}
            onSubmit={(evt) => handleSubmitRegister(evt)}
          >
            <div className="connexion__container_body-row">
              <i className="bi bi-envelope" />
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newRegisterEmail}
                onChange={(evt) => setNewRegisterEmail(evt.target.value)}
              />
            </div>
            <div className="connexion__container_body-row">
              <i className="bi bi-person-square" />
              <input
                type="text"
                className="input"
                placeholder="Pseudo"
                value={newRegisterPseudo}
                onChange={(evt) => setNewRegisterPseudo(evt.target.value)}
              />
            </div>
            <div className="connexion__container_body-row">
              <i className="bi bi-lock" />
              <input
                type="password"
                className="input"
                placeholder="Mot de passe"
                value={newRegisterPassword}
                onChange={(evt) => setNewRegisterPassword(evt.target.value)}
              />
            </div>
            <button className="connexion__btn" type="submit">Inscription</button>
          </form>
          <form
            className={passwordMissSelect ? 'connexion__container_body-form active' : 'connexion__container_body-form'}
            onSubmit={(evt) => handleSubmitRegister()}
          >
            <div className="connexion__container_body-row">
              <i className="bi bi-envelope" />
              <input
                type="email"
                className="input"
                placeholder="Adresse Mail"
                value={newRegisterEmail}
                onChange={(evt) => setNewRegisterEmail(evt.target.value)}
              />
            </div>
            <button className="connexion__btn" type="submit">Valider</button>
          </form>
        </div>

      </div>
    </div>
  );
};

Connexion.propTypes = {
  handleSelectConnexion: PropTypes.func.isRequired,
  handleSelectInscription: PropTypes.func.isRequired,
  connexionSelect: PropTypes.bool.isRequired,
  inscriptionSelect: PropTypes.bool.isRequired,
  passwordMissSelect: PropTypes.bool.isRequired,
  manageSubmitConnexion: PropTypes.func.isRequired,
  manageSubmitRegister: PropTypes.func.isRequired,
  manageSubmitPassword: PropTypes.func.isRequired,
  newConnexionEmail: PropTypes.string.isRequired,
  setNewConnexionEmail: PropTypes.func.isRequired,
  newConnexionPassword: PropTypes.string.isRequired,
  setNewConnexionPassword: PropTypes.func.isRequired,
  newRegisterEmail: PropTypes.string.isRequired,
  setNewRegisterEmail: PropTypes.func.isRequired,
  newRegisterPseudo: PropTypes.string.isRequired,
  setNewRegisterPseudo: PropTypes.func.isRequired,
  newRegisterPassword: PropTypes.string.isRequired,
  setNewRegisterPassword: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Connexion;
