

export default function DronesForm({lands, props}) {
    return (
        <div className="flex flex-col" style={{
            gap: '15px',
            overflow: 'auto',
            overflowX: 'hidden',
            maxHeight: '500px'
        }}>
            {lands?.map((item, idx) => {
                return (
                    <div className="flex flex-col drone-container">
                        <div className="flex justify-between">
                            <span>ID</span>
                            <span>{item.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Box Status</span>
                            <span>{item.drone.boxStatus}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Battery</span>
                            <span>{item.drone.battery}%</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Action</span>
                            <span>{item.drone.action}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Plant Index</span>
                            <span>{item.drone.plantIndex}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Schedule</span>
                            <span>{item.schedule > 0 || "Not Scheduled"}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}