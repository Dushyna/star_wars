import AboutMe from './AboutMe.jsx';
import StarWars from './StarWars.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import {navItems} from "../utils/constants.js";
import {Context} from "../utils/context.js";
import {useContext} from "react";

function Main() {
    const {page}=useContext(Context);
    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
}

export default Main