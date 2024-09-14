import { FaTimesCircle } from "react-icons/fa";

const PaymentCancel = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <FaTimesCircle size={100} className="text-red-500 mx-auto" />
        <h1 className="text-4xl font-bold mt-4">Payment Cancelled</h1>
        <p className="text-xl mt-2">Your payment was not completed.</p>
      </div>
    </div>
  );
};

export default PaymentCancel;
