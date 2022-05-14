
const plantTypes = {
    apple: {
        image: '/images/plant-apple.png'
    },
    corn: {
        image: '/images/plant-corn.png'
    },
    damaged: {
        image: '/images/plant-damaged.png'
    }
}

function Plant({type, ...props}) {
    return (
        <div className="plant">
            <img className="plant__land" src="/images/land-mid.png" style={{marginRight: '-5px'}} draggable={false}/>
            <img className="plant__tree" src={plantTypes[type].image}  draggable={false}/>
        </div>
    );
}

export default Plant;
