import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/searchContext";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../context/wishlistContext";

function OurServices() {
  const [services, setServices] = useState([]);
  const { handleSearch, search } = useContext(SearchContext);
  const [sortedProperty, setSortedProperty] = useState(null);
  const {addWishlist,wishlist,removeWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ourServices">
      <div className="head">OUR SERVICES</div>
      <div className="input">
        <input type="text" onChange={(e) => handleSearch(e)} />
        <button
          onClick={() => setSortedProperty({ property: "name", asc: false })}
        >
          Z-A
        </button>
        <button
          onClick={() => setSortedProperty({ property: "name", asc: true })}
        >
          A-Z
        </button>
        <button onClick={() => setSortedProperty(null)}>Deafult</button>
      </div>
      <div className="ourServicesCards">
        {services
          .sort((a, b) => {
            if (sortedProperty && sortedProperty.asc) {
              return a[sortedProperty.property] > b[sortedProperty.property]
                ? 1
                : b[sortedProperty.property] > a[sortedProperty.property]
                ? -1
                : 0;
            } else if (sortedProperty && sortedProperty.asc === false) {
              return a[sortedProperty.property] < b[sortedProperty.property]
                ? 1
                : b[sortedProperty.property] < a[sortedProperty.property]
                ? -1
                : 0;
            } else {
              return 0;
            }
          })
          .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <ul className="card">
              <li className={`${x.icon} icon`}></li>
              <li className="name">{x.name}</li>
              <li className="desc">{x.description}</li>
             <li><NavLink to={"/Detail/"+x._id}>Learn More</NavLink></li>
             <li className="wishlist" onClick={()=>addWishlist(x)}><i class="fa-regular fa-heart"></i></li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default OurServices;
