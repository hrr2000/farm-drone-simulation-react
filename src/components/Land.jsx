import Plant from "./Plant";
import {useEffect, useState} from "react";



function Land({cropType, numberOfPlants, ...props}) {
    const [plants, setPlants] = useState([]);
    useEffect(() => {
        if(plants.length) return;
        for(let i = 0; i < numberOfPlants; i++) {
            plants.push({})
        }
        setPlants([...plants])
    }, [])
    return (
        <div className="land">
            <img className="drone-box" src="/images/drone-box.png" draggable={false}/>
            <img className="land-part" src="/images/land-start.png" style={{marginRight: '-5px'}}  draggable={false}/>
            {
                plants.map((item, idx) => {
                    return (
                        <Plant key={`plant-${idx}`} type={cropType}/>
                        )
                })
            }
            <img className="land-part" src="/images/land-end.png" style={{marginLeft: '-5px'}}  draggable={false}/>
        </div>
    );
}

export default Land;
