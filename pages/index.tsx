import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {

  const [productList, setProductList] = useState <TProduct[]>([])

  useEffect(() => {
    window
    .fetch('api/avo')
    .then(response => response.json())
    .then(({data, length}) =>{
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Hola Mundo</h1>
      {
        productList.map( (product, key)=>(
          <div key={key} >{product.name}</div>
        ))
      }
    </div>
  );
};

export default Home;
