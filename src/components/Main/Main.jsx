import React from 'react';
import './main.css';
import Promo from './Promo/Promo';
import AboutMe from '../AboutMe/AboutMe';
import HelpYou from '../HelpYou/HelpYou';
import Services from '../Services/Services';
import Stages from '../Stages/Stages';
import Results from '../Results/Results';
import Blog from '../Blog/Blog';
import Ready from '../Ready/Ready';
import Contacts from '../Contacts/Contacts';



function Main(props) {

    return (
        <>
            <Promo openPopup={props.openPopup} onMenu={props.onMenu} />
            <AboutMe />
            <HelpYou />
            <Services openPopup={props.openPopup}/>
            <Stages />
            <Results />
            <Blog onCard={props.onCard}/>
            <Ready onSend={props.onSend} />
            <Contacts />
        </>
    );
}

export default Main;
