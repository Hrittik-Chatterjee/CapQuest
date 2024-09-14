import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice"; // Import the action

const ProductDetails = () => {
  const product = useLoaderData();
  const dispatch = useDispatch(); // Access dispatch

  const { description, image_url, price, title, stock_quantity } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the action with the product data
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
          onClick={handleAddToCart} // Handle Add to Cart
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
