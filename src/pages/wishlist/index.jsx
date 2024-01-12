import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import "./index.scss"

function Wishlist() {
  const { wishlist,addWishlist } = useContext(WishlistContext);
  return (
    <div className="wishlistPage">
      {wishlist.map((x) => (
        <ul className="pages">
          <li className={`${x.icon} icon`}></li>
          <li className="name">{x.name}</li>
          <li className="desc">{x.description}</li>
          <li className="wishlist" onClick={()=>addWishlist(x)}><i class="fa-regular fa-heart"></i></li>

        </ul>
      ))}
    </div>
  );
}

export default Wishlist;
