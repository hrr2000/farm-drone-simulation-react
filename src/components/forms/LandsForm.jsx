import {useState} from "react";


export default function LandsForm() {
    const [data, setData] = useState({

    });
    return (
        <>
            <div className="input-group">
                <label className="input-label">Capacity</label>
                <input className="input-field" type="number" placeholder="Number Of Plants" required/>
            </div>
            <div className="input-group">
                <label className="input-label">Type</label>
                <select className="input-field" type="number" required>
                    <option value="">Choose Crop Type</option>
                </select>
            </div>
            <div className="input-group">
                <label className="input-label">ٍSchedule</label>
                <input className="input-field" type="number" placeholder="Rest duration for drone in seconds" required/>
            </div>
            <div className="input-group">
                <button type="button" className="submit-button">
                    Create
                </button>
            </div>
        </>
    );
}