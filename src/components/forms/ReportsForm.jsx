import {useEffect, useState} from "react";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";


export default function ReportsForm({lands, props}) {

    const [reports, setReports] = useState([])

    useEffect(() => {
        let list = []
        lands.forEach((item, idx) => {
            list = [
                ...list,
                ...item.reports
            ]
        })
        setReports(list)
    }, [lands])

    return (
        <div className="flex flex-col" style={{
            gap: '15px',
            overflow: 'auto',
            overflowX: 'hidden',
            maxHeight: '500px'
        }}>
            {reports?.map((item, idx) => {
                return (
                    <div className="flex flex-col drone-container">
                        <div className="flex justify-between">
                            <span>ID</span>
                            <span>{item.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Plant ID</span>
                            <span>{item.plantId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Problem</span>
                            <span>{item.problem}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}