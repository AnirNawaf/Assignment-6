import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  


  return (
    <div>
      <Navbar cart={cart} />
      <ToastContainer />

      <Banner />
      <Stats />
      
    </div>
  );
}

export default App;