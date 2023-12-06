import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
export default function Pet() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/pet");
        const data = await response.json();
        console.log(data);
        setData(data);
    
    }
    return (
        <>  
            <h1>Pet</h1>
            <Link to="/PetForm" className="btn btn-primary">Add Pet</Link>
            <br></br>
            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map((item) => (
                    <div className="col" key={item.Pet_id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.Name}</h5>
                                <p className="card-text">{item.Type}</p>
                                <p className="card-text">{item.Age}</p>
                                <p className="card-text">{item.Breed}</p>
                                <Link to={`/pet/${item.Pet_id}`} className="btn btn-primary">Edit</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}