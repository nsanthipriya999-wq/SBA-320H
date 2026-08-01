  import { StrictMode } from 'react'
  import react from 'react';
  import { BrowserRouter } from 'react-router';
  import { createRoot } from 'react-dom/client'
  //import './styles/App.css'
  import App from './App.jsx'
  import { FavoriteProvider } from "./context/FavoriteContext.jsx";

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
      <FavoriteProvider>
      <App />
      </FavoriteProvider>
      </BrowserRouter>
    </StrictMode>,
  )
