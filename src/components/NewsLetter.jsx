const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-black text-white">
      <h2 className="text-xl font-bold mb-2">Join our Newsletter</h2>
      <p className="text-center text-gray-400 mb-4">
        Sign up today and receive 10% off your next order and <br />
        stay up to date on the latest drops.
      </p>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-md focus:outline-none text-black"
          disabled
        />
        <button
          type="button"
          className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-gray-200 focus:outline-none"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
