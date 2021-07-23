import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import containers
import Home from 'src/containers/Home';
import Connexion from 'src/containers/Connexion';
import Picture from 'src/containers/Picture';

// == Import components
import Contact from 'src/containers/Contact';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';
import CGU from 'src/components/Footer/Links/CGU';
import LegaleMentions from 'src/components/Footer/Links/LegalesMentions';
import AnimalDefense from 'src/components/Footer/Links/AnimalDefense';
import Categories from 'src/components/Categories';
import TopLove from 'src/components/TopLove';
import Profil from 'src/components/Profil';
import Aime from 'src/components/Aime';
import Notification from 'src/components/Notification';

// == Import asset and css
import './app.scss';


// == Composant
const App = () => {

  return(
  <div className="app">

    <Header/>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/categories" exact component={Categories}/>
      <Route path="/toplove" exact component={TopLove}/>
      <Route path='/connexion' component={Connexion} />
      <Route path='/profil' component={Profil} />
      <Route path='/notifications' component={Notification} />
      <Route path='/tags' component={Aime} />
      <Route path='/post/:id' component={Picture} />
      <Route path='/protection-animale' component={AnimalDefense} />
      <Route path='/contact' component={Contact} />
      <Route path='/mentions-legales' component={LegaleMentions} />
      <Route path='/cgu' component={CGU} />
      <Route path='/protection-animale' component={AnimalDefense} />
      <Route component={Error}/>
    </Switch> 
    <Footer /> 

  </div>
  )
};

// == Export
export default App;


