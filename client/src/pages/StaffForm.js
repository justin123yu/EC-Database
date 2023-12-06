import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function PetForm(){
    const navigate = useNavigate();
    const [data, setData] = useState({
      Name: "",
      Role: "",
      Date_Hired: Date.now()
    });
  
    const {id} = useParams();
  
    useEffect(()=> {
      if(id){
        fetch("http://localhost:8080/api/staff/" + id)
        .then(response => response.json())
        .then(data => {
          setData(data[0]);
        });
    }
    }, [id]);
    
    const handler = (event) => {
      const newData = {...data};
      newData[event.target.name] = event.target.value;
      setData(newData);
  
    };
  
    async function onSubmit(event){
      event.preventDefault();
      try{
        let path = "http://localhost:8080/api/staff";
        let method = "POST";
        if(id){
          path = "http://localhost:8080/api/staff/" + id;
          method = "PATCH";
        }
        const response = await fetch(path, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
        const json = await response.json();
        console.log(json);
        navigate("/staff");  
      } catch (error){
        console.log(error);
      }
    }
    async function onDelete(){
      try{
        await fetch(`http://localhost:8080/api/staff/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        });
        navigate("/staff");  
      } catch (error){
        console.log(error);
      }
    }

  
      return (
      <main>
        <>
        <form className="container" onSubmit={onSubmit}>
                {id ? <h1>Edit Staff</h1> : <h1>Add Staff</h1>}
              <label className="form-label">Staff Name</label>
              <input type="text" onChange={handler} className="form-control"  value={data.Name} id="Name" name="Name" aria-describedby="Name"></input>
              <label className="form-label">Staff Role</label>
              <input type="text" onChange={handler} className="form-control" value={data.Role} id="Role" name="Role" aria-describedby="Role"></input>
              <div id="buttons">
                <button type="submit" className="btn btn-primary">Submit</button>
                {id && <button type="button" onClick={onDelete} className="btn btn-danger">Delete</button> }
              </div>
          </form>
        </>
    </main>
      )
  }