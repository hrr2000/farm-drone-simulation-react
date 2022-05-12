import logo from './logo.svg';
import './App.css';
import Land from "./components/Land";
import {useEffect, useState} from "react";
import LandsForm from "./components/forms/LandsForm";
import DronesForm from "./components/forms/DronesForm";

const buttons = [
    {
        name: 'lands',
    },
    {
        name: 'drones',
    },
    {
        name: 'reports',
    },
]

const forms = {
    lands: <LandsForm/>,
    drones: <DronesForm/>,
}

function App() {

    const [activeForm, setActiveForm] = useState('lands');

    useEffect(() => {

    }, [])

  return (
    <div className="app">
        <div className="lands">
            <Land cropType="corn" numberOfPlants={7}/>
            <Land cropType="corn" numberOfPlants={5}/>
            <Land cropType="apple" numberOfPlants={10}/>
            <Land cropType="apple" numberOfPlants={4}/>
        </div>
        <div className="paper">
            <div className="data-block">
                <div className="nav-list">
                    {buttons.map((item, idx) => {
                        return (
                            <img key={`nav-button-${idx}`} className={`nav-button ${item.name === activeForm && 'active'}`} onClick={() => {
                                setActiveForm(item.name)
                            }} src={`/images/button-${item.name}.png`}/>
                        );
                    })}
                </div>
                <div className="data-form">
                    {forms[activeForm]}
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
