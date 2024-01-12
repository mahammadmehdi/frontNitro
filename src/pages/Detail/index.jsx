import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss"

function Detail() {
  const [detailProduct, setDetailProduct] = useState([]);

  
  const { id }= useParams()
 
    useEffect(() => {
        fetch("http://localhost:3000/"+id)
          .then((res) => res.json())
          .then((data) => setDetailProduct(data))
          
      }, []);
  
  
  return (
    <div className="detailPage">
      
        <ul className="pages">
          <li className={`${detailProduct.icon} icon`}></li>
          <li className="name">{detailProduct.name}</li>
          <li className="desc">{detailProduct.description}</li>
        </ul>
      
    </div>
  );
}

export default Detail;
