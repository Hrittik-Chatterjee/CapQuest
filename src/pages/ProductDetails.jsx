import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice"; // Import the action

const ProductDetails = () => {
  const product = useLoaderData();
  const dispatch = useDispatch();

  const { description, image_url, price, title, stock_quantity } = product;

  const handleAddToCart = () => {
    if (stock_quantity > 0) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="flex justify-center items-start mt-10 space-x-10">
      {/* Product Image */}
      <div className="flex-shrink-0 w-1/2">
        <img src={image_url} alt="Product" className="w-full" />
      </div>

      {/* Product Details */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
        <p className="mb-2">Price: ${price}</p>

        {/* Available Quantity */}
        <div className="mb-4">
          <label className="mr-2">Available Quantity:</label>
          <p>{stock_quantity}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`py-2 px-4 rounded ${
            stock_quantity > 0
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-500 text-white cursor-not-allowed"
          }`}
          disabled={stock_quantity === 0} // Ensure this checks correctly
        >
          {stock_quantity > 0 ? "Add to Cart" : "Not Available"}
        </button>

        {/* Stock message */}
        {stock_quantity === 0 && (
          <p className="text-red-500 mt-4">
            You can&apos,t add more. No more products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
