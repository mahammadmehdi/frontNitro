import React, { createContext, useState } from 'react'

export const  WishlistContext = createContext()
function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useState([])

    function addWishlist(item) {
        const index = wishlist.findIndex((x)=> x.id === item.id)
        if (index === -1) {
            setWishlist([...wishlist,{...item}])
            return
        }
        else{
            removeWishlist(item)
        }
    }

    function removeWishlist(item) {
        setWishlist(wishlist.findIndex((x)=> x.id !== item.id))
    }
  return (
    <WishlistContext.Provider value={{removeWishlist,addWishlist,wishlist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider