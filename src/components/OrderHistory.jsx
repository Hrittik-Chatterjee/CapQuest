import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://ecommerce-dashboard-server-awlu.onrender.com/order/${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user?.email]);

  return (
    <div className="bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg">
        <div className="px-6 py-4 border-b">
          <h2 className="font-bold text-xl">Order History</h2>
        </div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Order Number
              </th>
              <th className="px-5 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Order Date
              </th>
              <th className="px-5 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Items
              </th>
              <th className="px-5 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Total Price
              </th>
              <th className="px-5 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="bg-white hover:bg-gray-50">
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {order._id}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {new Date(order.created_at).toLocaleDateString()}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {order.items
                    ? order.items.map((item, index) => (
                        <div key={index}>
                          {item.description} (x{item.quantity})
                        </div>
                      ))
                    : "No items"}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {order.payment_status}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  ${order.amount_total / 100}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600">
                    Re-Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
