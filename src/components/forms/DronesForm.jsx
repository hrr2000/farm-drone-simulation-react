

export default function LandsForm() {
    return (
        <>
            <div className="input-group">
                <label className="input-label">Capacity</label>
                <input className="input-field" type="number" placeholder="Number Of Plants"/>
            </div>
            <div className="input-group">
                <label className="input-label">Type</label>
                <select className="input-field" type="number">
                    <option value="">Choose Crop Type</option>
                </select>
            </div>
            <div className="input-group">
                <button type="button" className="submit-button">
                    Create
                </button>
            </div>
        </>
    );
}