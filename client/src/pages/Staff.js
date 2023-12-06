import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
export default function Staff() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/staff");
        const data = await response.json();
        console.log(data);
        setData(data);
    
    }
    return (
        <>  
            <h1>Staff</h1>
            <Link to="/staffForm" className="btn btn-primary">Add Staff</Link>
            <br></br>
            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map((item) => (
                    <div className="col" key={item.Staff_id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.Name}</h5>
                                <p className="card-text">{item.Role}</p>
                                <p className="card-text">{item.Date_Hired}</p>
                                <Link to={`/staff/${item.Staff_id}`} className="btn btn-primary">Edit</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}