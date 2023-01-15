import React, { useState } from 'react';
import './App.css';
// import AddContact from './components/AddContact';
// import ContactList from './components/ContactList';



function App() {
    const bgDefaultColour = "red";
    const [bg, setBg] = useState(bgDefaultColour);
    const [name, setName] = useState("click me");
    const [change, setChange] = useState("btn btn-success");

    const bgChange = () => {

        const newBg = "#8e44ad";
        setBg(newBg);
        setName("Fuck U 🤌 ");

    }

    const bgBack = () => {
        const color = "lightblue"
        setBg(color);
        setName("Oops 😯 ");
        setChange("btn btn-primary")

    }

    return ( <
        div style = {
            { backgroundColour: bg } } >

        <
        button className = { change }
        onClick = { bgChange }
        onDoubleClick = { bgBack } > { name } < /button>

        <
        /div>
    );


}

export default App;