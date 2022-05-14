import logo from './logo.svg';
import './App.css';
import Land from "./components/Land";
import {useEffect, useState} from "react";
import LandsForm from "./components/forms/LandsForm";
import DronesForm from "./components/forms/DronesForm";
import {FireService} from './utils/services';
import {db} from './utils/firebase'
import { query, onSnapshot, collection, doc } from 'firebase/firestore'
import ReportsForm from "./components/forms/ReportsForm";

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

function App() {

    const [activeForm, setActiveForm] = useState('lands');
    const [lands, setLands] = useState([]);

    const forms = {
        lands: <LandsForm/>,
        drones: <DronesForm lands={lands}/>,
        reports: <ReportsForm lands={lands}/>,
    }

    useEffect(() => {
        const q = query(collection(db, "lands"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const landsTmp = [];
            querySnapshot.forEach((doc) => {
                landsTmp.push({...doc.data(), id: doc.id});
                // LandService.delete(doc.id).catch(console.error)
                console.log(doc)
            });
            setLands(landsTmp)
            console.log(landsTmp)
        });
        return () => unsubscribe();
    }, [])

  return (
    <div className="app">
        <div className="lands">
            {lands.map((item, idx) => {
                return (
                    <Land key={`land-${item.id}`} land={item} cropType={item.type} numberOfPlants={item.capacity}/>
                )
            })}
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
