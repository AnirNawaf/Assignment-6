const Navbar = ({ cart }) => {
  return (
    <div className="w-full bg-gray-100 shadow-sm px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 py-3 flex items-center justify-between">
      <h1 className="text-xl sm:text-2xl font-bold text-purple-600">
        DigiTools
      </h1>
      <ul className="hidden md:flex gap-4 lg:gap-6 text-gray-700 font-medium text-sm lg:text-base">
        <li className="cursor-pointer hover:text-purple-600">Products</li>
        <li className="cursor-pointer hover:text-purple-600">Features</li>
        <li className="cursor-pointer hover:text-purple-600">Pricing</li>
        <li className="cursor-pointer hover:text-purple-600">Testimonials</li>
        <li className="cursor-pointer hover:text-purple-600">FAQ</li>
      </ul>
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <div className="relative cursor-pointer transition duration-300 hover:scale-110">
          <img className="w-5 h-5 sm:w-6 sm:h-6" src="src/img/shopping-cart-01.png" alt="" />
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
            {cart.length}
          </span>
        </div>

        <button className="hidden sm:block text-gray-700 hover:text-purple-600 cursor-pointer transition duration-300 hover:scale-105 text-sm md:text-base">
          Login
        </button>

        <button className="bg-purple-600 text-white px-3 sm:px-4 py-1 rounded-full hover:bg-purple-700 cursor-pointer transition duration-300 hover:scale-105 text-sm md:text-base">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default Navbar;