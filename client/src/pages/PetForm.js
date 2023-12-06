import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

export default function PetForm(){
    const navigate = useNavigate();
    const [data, setData] = useState({
      Name: "",
      Type: "",
      Breed: "",
      Age: 0
    });
  
    const {id} = useParams();
  
    useEffect(()=> {
      if(id){
        fetch("http://localhost:8080/api/pet/" + id)
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
        let path = "http://localhost:8080/api/pet";
        let method = "POST";
        if(id){
          path = "http://localhost:8080/api/pet/" + id;
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
        navigate("/pet");  
      } catch (error){
        console.log(error);
      }
    }
    async function onDelete(){
      try{
        await fetch(`http://localhost:8080/api/pet/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        });
        navigate("/pet");  
      } catch (error){
        console.log(error);
      }
    }

  
      return (
      <main>
        <>
        <form className="container" onSubmit={onSubmit}>
                {id ? <h1>Edit Pet</h1> : <h1>Add Pet</h1>}
              <label className="form-label">Pet Name</label>
              <input type="text" onChange={handler} className="form-control"  value={data.Name} id="Name" name="Name" aria-describedby="Name"></input>
              <label className="form-label">Pet Type</label>
              <input type="text" onChange={handler} className="form-control" value={data.Type} id="Type" name="Type" aria-describedby="Type"></input>
              <label className="form-label">Pet Breed</label>
              <input type="text" onChange={handler} className="form-control"  value={data.Breed} id="Breed" name="Breed" aria-describedby="Breed"></input>
              <label className="form-label">Pet Age</label>
              <input type="number" onChange={handler} className="form-control" value={data.Age} id="Age" name="Age" aria-describedby="Age"></input>
              <div id="buttons">
                <button type="submit" className="btn btn-primary">Submit</button>
                {id && <button type="button" onClick={onDelete} className="btn btn-danger">Delete</button> }
              </div>
          </form>
        </>
    </main>
      )
  }