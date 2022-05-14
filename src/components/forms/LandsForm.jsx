import {useEffect, useState} from "react";
import {FireService, plantTypes} from '../../utils/services'

const LandService = new FireService('lands')

const problems = [
    'healthy',
    'disease',
    'insects',
    'salinity'
]

export default function LandsForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        capacity: 1,
        type: 'corn',
        schedule: 0,
        plants: [],
        drone: {
            boxStatus: 'closed',
            battery: 100,
            action: 'Idle',
            plantIndex: 0,
        }
    });
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>
            <div className="input-group">
                <label className="input-label">Capacity</label>
                <input className="input-field" type="number" placeholder="Number Of Plants" onChange={(e) => {
                    setData({
                        ...data,
                        capacity: e.target.value
                    })
                }} required/>
            </div>
            <div className="input-group">
                <label className="input-label">Type</label>
                <select className="input-field" onChange={(e) => {
                    setData({
                        ...data,
                        type: e.target.value
                    })
                }} required>
                    <option value="">Choose Crop Type</option>
                    {Object.keys(plantTypes)?.map(((type, idx) => {
                        return (
                            <option key={`plant-crop-type-${idx}`} value={type}>
                                {plantTypes[type]?.displayName}
                            </option>
                        )
                    }))}
                </select>
            </div>
            <div className="input-group">
                <label className="input-label">ٍSchedule</label>
                <input className="input-field" type="number" placeholder="Rest duration for drone in seconds" onChange={(e) => {
                    setData({
                        ...data,
                        schedule: e.target.value
                    })
                }} required/>
            </div>
            <div className="input-group">
                <button type="button" className="submit-button" onClick={() => {
                    setIsLoading(true);
                    data.plants = []
                    data.reports = []
                    for(let i = 0; i < data.capacity; i++) {
                        const random = parseInt(Math.random() * 4);
                        data.plants.push(problems[random])
                    }
                    LandService.create(data).then(() => setIsLoading(false)).catch(console.error)
                }}>
                    {isLoading ? 'Creating...' : 'Create'}
                </button>
            </div>
        </>
    );
}