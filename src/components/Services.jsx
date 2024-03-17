import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';

const Services = () => {
  const [first, setfirst] = useState("this is normal data")
  const [second, setsecond] = useState("this is very large data")


  const getusers = () => {
   
    axios
    .get("/users")
    .then((users) => {
      console.log(users)
      // setproducts(product.data)
    })
    .catch(err=>console.log(err))
    }


  useEffect(() => {
    getusers();
    console.log("Services Component is Created!");

    return () => {
      console.log("Service component is Deleted!");
    };
  }, [second]); // Empty dependency array to mimic componentDidMount and componentWillUnmount

  return <div>
    <h1>{first}</h1>
    <button onClick={()=> setfirst("Normal Data has been changed")} 
    className='rounded mb-10 bg-red-100 p-2'>Change Normal Data</button>

    <h1>{second}</h1>
    <button onClick={()=> setsecond("large data has been changed")} 
    className='rounded mb-10 bg-blue-100 p-2'>Change Large Data</button>
  </div>;
};

export default Services;
