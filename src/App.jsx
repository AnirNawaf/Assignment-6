import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./data/products";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const Cartadd = (product) => {
    setCart([...cart, product]);
    toast.success("Added!");
  };

  const removCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
    toast.error("Removed!");
  };

  const check = () => {
    setCart([]);
    toast.success("Check Done!");
  };



  return (
    <div>
      <Navbar cart={cart} />
      <ToastContainer />

      <Banner />
      <Stats />
      <div className="min-h-screen bg-[#f8f8fb] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              Premium Digital Tools
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
              Choose from our curated collection of premium digital products designed
              <br />
              to boost your productivity and creativity.
            </p>
          </div>

          <div className="mb-10 flex items-center justify-center gap-0">
            <button onClick={() => setView("products")}  className={
              `
              rounded-l-full border  cursor-pointer transition duration-300 hover:scale-105 border-slate-200 px-8 py-3 text-sm font-medium transition ${view === "products" ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md" : "bg-white text-slate-700"
              }
              `
              }>
              Products
            </button>

            <button
              onClick={() => setView("cart")} className={
                `
                rounded-r-full cursor-pointer transition duration-300 hover:scale-107  border border-l-0  cursor-pointer border-slate-200 px-6 py-3 text-sm font-medium transition ${view === "cart" ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md" : "bg-white text-slate-700"
                }
                `
              }>
              Cart ({cart.length})
            </button>
          </div>

          {view === "products" ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} Cartadd={Cartadd} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Cart cart={cart} removCart={removCart} />

              {cart.length > 0 && (
                <button onClick={check} className="mt-6 w-full cursor-pointer transition duration-300 hover:scale-105 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95">
                  Proceed To Checkout
                </button>
              )}
            </div>
          )}
        </div>
      </div>


      <Steps />
      <Pricing />

    </div>
  );
}

export default App;