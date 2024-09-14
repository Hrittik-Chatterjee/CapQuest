import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "../cart/cartSlice"; // Make sure you have this action in your slice
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../hooks/useAuth";
const stripePromise = loadStripe(import.meta.env.VITE_publishableKey);

const CartProducts = () => {
  // Access cartItems and totalPrice from Redux state
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const customerEmail = user?.email;

  // Handle checkout process
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(
      "https://ecommerce-dashboard-server-awlu.onrender.com/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: cartItems, email: customerEmail }),
      }
    );

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  // Function to handle item removal
  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Dispatch the action to remove item
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* Table head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over cartItems from Redux store to generate rows */}
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image_url} alt={item.title} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleRemove(item._id)} // Handle item removal
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center">
        <p className="text-2xl font-bold">
          Sub Total: ${totalPrice.toFixed(2)}
        </p>
        <button
          className="px-6 mt-3 py-3 w-400 bg-blue-500 text-white font-bold text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
