import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchProvider from './context/searchContext.jsx'
import WishlistProvider from './context/wishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
    <SearchProvider>
    <App />
    </SearchProvider>
    </WishlistProvider>
  </React.StrictMode>,
)
