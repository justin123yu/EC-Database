import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
export default function Adopter() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/adopter");
        const data = await response.json();
        console.log(data);
        setData(data);
    
    }
    return (
        <>  
            <h1>Adopter</h1>
            <Link to="/adoptForm" className="btn btn-primary">Add Adopter</Link>
            <br></br>
            <br></br>
            <div className="card-group">
                {data.map((item) => (
                    <div className="card" key={item.Adopter_id}>
                        <div className="card-body">
                            <h5 className="card-title">{item.Name}</h5>
                            <p className="card-text">{item.Phone}</p>
                            <Link to={`/adopter/${item.Adopter_id}`} className="btn btn-primary">Edit</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}