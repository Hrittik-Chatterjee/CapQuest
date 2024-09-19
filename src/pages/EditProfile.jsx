/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const EditProfile = () => {
  const userInfo = useLoaderData();
  console.log(userInfo);
  const [name, setName] = useState(userInfo?.name);
  const [age, setAge] = useState(userInfo?.age);
  const [mobileNumber, setMobileNumber] = useState(userInfo?.mobileNumber);
  const [imageUrl, setImageUrl] = useState(userInfo.imageUrl);

  const handleSubmit = async (e) => {
    const form = e.target;

    const name = form.name.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;
    const imageUrl = form.imageUrl.value;

    const data = { imageUrl, name, age, mobileNumber };
    e.preventDefault();
    await fetch(
      `https://ecommerce-dashboard-server-awlu.onrender.com/users/${userInfo?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    toast.warning("Successfully Updated The Profile", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Update Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-base font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              disabled
              className="block w-full px-4 py-3 text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 mb-2">
              Mobile Number
            </label>
            <input
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="block w-full px-4 py-3 text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your Mobile Number"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full px-4 py-3 text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your age"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 mb-2">
              Profile Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              name="imageUrl"
              onChange={(e) => setImageUrl(e.target.value)}
              className="block w-full px-4 py-3 text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your image URL"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-3 text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
