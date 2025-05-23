import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <App />
  </BrowserRouter>
)
