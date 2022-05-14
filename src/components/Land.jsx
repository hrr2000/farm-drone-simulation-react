import Plant from "./Plant";
import {useEffect, useState} from "react";
import {FireService} from "../utils/services";

const LandService = new FireService('lands')

function Land({land, cropType, numberOfPlants, ...props}) {

    function goOutSide() {
        land.drone.style = {transform: 'translate(0, -150px)'}
        land.reports = []
        LandService.update(land.id, land).catch(console.error)
        land.drone.boxStatus = 'open'
        LandService.update(land.id, land).catch(console.error)
    }

    function startJob() {
        let index = 0;
        let isProcessed = 0;
        let translateX = 180, translateY = -200;
        const allPlantsInterval = setInterval( () => {
            if(index === 0) {
                index++;
                land.drone.action = 'Navigating'
                land.drone.style = {transform: `translate(${translateX}px, ${translateY}px)`}
                land.drone.plantIndex = index;
                if(land.plants[index - 1] !== 'healthy') {
                    land.reports.push({
                        id: land.id,
                        plantId: index,
                        problem: land.plants[index - 1]
                    })
                }
                LandService.update(land.id, land).catch(console.error)
                setTimeout(() => {
                    land.drone.action = 'Processing'
                    LandService.update(land.id, land).catch(console.error)
                }, 200)
            } else {
                if(index <= land.plants.length) {
                    const interval = setInterval(() => {
                        if(isProcessed === 5) {
                            land.drone.action = 'Navigating'
                            LandService.update(land.id, land).catch(console.error)
                            setTimeout(() => {
                                land.drone.action = 'Processing'
                                LandService.update(land.id, land).catch(console.error)
                            }, 200)
                            clearInterval(interval)
                            isProcessed = 0;
                            index++;
                            if(index <= land.plants.length) {
                                translateX += 130;
                                land.drone.style = {transform: `translate(${translateX}px, ${translateY}px)`}
                                land.drone.battery--;
                                land.drone.plantIndex = index;
                                if(land.plants[index - 1] !== 'healthy') {
                                    land.reports.push({
                                        id: land.id,
                                        plantId: index,
                                        problem: land.plants[index - 1]
                                    })
                                }
                                LandService.update(land.id, land).catch(console.error)
                            } else {
                                LandService.update(land.id, land).catch(console.error).then(() => {
                                    setTimeout(() => goInside(), 1000)
                                })
                                clearInterval(allPlantsInterval)
                            }
                        } else {
                            isProcessed++;
                        }
                    }, 1000)
                }
            }
        }, 5000)
    }

    function goInside() {
        land.drone.style = {transform: 'translateY(0)',}
        land.drone.plantIndex = 0
        land.drone.action = 'Idle'
        LandService.update(land.id, land).catch(console.error)
        setTimeout(() => {
            land.drone.boxStatus = 'closed'
            LandService.update(land.id, land).catch(console.error)
        }, 1000)
    }

    return (
        <div className="land" style={{
            height: "230px"
        }}>
            {land.drone.boxStatus === 'open' ? (
                <img className="drone-box open" src="/images/drone-box-opened.png" draggable={false}/>
            ) : (
                <img onClick={() => {
                    goOutSide()
                    startJob()
                }} className="drone-box" src="/images/drone-box.png" draggable={false}/>
            )}
            <img className="drone" src="/images/drone.gif" draggable={false} style={land.drone.style} />
            <img className="land-part" src="/images/land-start.png" style={{marginRight: '-5px'}}  draggable={false}/>
            {
                land.plants.map((item, idx) => {
                    console.log('item', item)
                    return (
                        <Plant key={`plant-${idx}`} type={item == 'healthy' ? cropType : 'damaged'}/>
                        )
                })
            }
            <img className="land-part" src="/images/land-end.png" style={{marginLeft: '-5px'}}  draggable={false}/>
        </div>
    );
}

export default Land;
