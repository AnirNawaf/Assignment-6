const Cart = ({ cart, removCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-slate-900">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-5xl text-red-600 flex gap-2 items-center justify-center text-center">Cart is empty
          <img className="h-14 w-14 bg-amber-300 rounded-b-full p-4 " src="src/img/shopping-cart-01.png" alt="" /></p>
      )}

      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}className="flex items-center justify-between rounded-xl bg-slate-50 px-5 py-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                <img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover"/>
              </div>

              <div>
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">${item.price}</p>
              </div>
            </div>

            <button onClick={() => removCart(index)} className="text-sm font-medium cursor-pointer transition duration-300 hover:scale-105 text-pink-500 transition hover:text-pink-600 cursor-pointer">
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-slate-400">Total:</span>
          <span className="text-3xl font-semibold text-slate-900"> ${total} </span>
        </div>
      )}
    </div>
  );
};

export default Cart;