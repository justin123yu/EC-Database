import React, { useEffect, useState } from "react";
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
            <ul>
                {data.map((item) => (
                    <li key={item.Adopter_id}>{item.Name +" "+item.Phone}</li>
                ))}
            </ul>
        </>
    )
}