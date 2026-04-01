import checkIcon from "../img/Vector (10).png";

const ProductCard = ({ product, Cartadd, inCart }) => {
  return (
    <div className="p-4  rounded-xl shadow relative flex flex-col justify-between">
      {product.label && (
        <span
          className={
            `
            absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-semibold ${product.label === "Best Seller" ? "bg-yellow-200 text-yellow-800" : product.label === "Popular" ? "bg-blue-200 text-blue-800" : product.label === "New" ? "bg-green-200 text-green-800" : ""
            }

            `
          } > {product.label}
        </span>
      )}

      <div className="text-3xl mb-2">
        <img src={product.image} alt={product.name} className="h-16 w-16 object-cover rounded-full"/>
      </div>

      <h2 className="text-lg font-bold mb-1">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-3">{product.description}</p>

      <p className="font-bold text-lg mb-3">
        ${product.price}
        {product.priceSuffix}
      </p>

      <ul className="text-gray-700 text-sm mb-3 space-y-1">
        {product.features?.map((feat, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mr-2 text-green-500"><img src={checkIcon} alt="" /></span> {feat}
          </li>
        ))}
      </ul>

      <button onClick={() => Cartadd(product)} className={
        `
       cursor-pointer transition duration-300 hover:scale-105 w-full py-2 rounded font-semibold ${inCart ? "bg-green-500 text-white cursor-not-allowed" : "bg-purple-600 text-white"
          }
          `
        } disabled={inCart}>
        {inCart ? "Added to Cart!" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;