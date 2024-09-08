import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);

  const { description, image_url, price, title, stock_quantity } = product;
  const [quantity, setQuantity] = useState(1);
  const [stockQuantity, setStockQuantity] = useState(stock_quantity);

  const { addToCart } = useContext(CartContext);

  // Function to handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= stockQuantity) {
      setQuantity(newQuantity);
    }
  };

  // Calculate price based on quantity
  const calculatePrice = () => {
    return quantity * price;
  };

  // Handle adding product to cart
  const handleAddToCart = () => {
    if (quantity <= stockQuantity) {
      const productToAdd = {
        ...product,
        quantity,
        totalPrice: calculatePrice(),
      };
      addToCart(productToAdd);
      setStockQuantity(stockQuantity - quantity); // Update stock quantity
      setQuantity(1); // Reset quantity after adding to cart
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

        <p className="mb-2">Sub Total: ${calculatePrice()}</p>

        {/* Available Quantity */}
        <div className="mb-4">
          <label className="mr-2">Available Quantity:</label>
          <p>{stockQuantity}</p>
        </div>

        {/* Quantity Selector */}
        {stockQuantity > 0 ? (
          <div className="mb-4">
            <label htmlFor="quantity" className="mr-2">
              Selected Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              className="border border-slate-700 rounded-lg py-1 px-3 w-20 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={stockQuantity}
            />
          </div>
        ) : (
          <p className="mb-4 text-red-500">Out of Stock</p>
        )}

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          disabled={stockQuantity <= 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
