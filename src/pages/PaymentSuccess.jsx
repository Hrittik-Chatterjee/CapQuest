import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="text-center">
        <FaCheckCircle size={100} className="text-green-500 mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Payment Successful!</h1>
        <p className="text-xl mt-2">Thank you for your purchase.</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
