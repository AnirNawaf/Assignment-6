import { useState } from "react";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  


  return (
    <div>
      <Navbar cart={cart} />
      
    </div>
  );
}

export default App;