// const UserCard = ({ name, jobTitle, description }) => {

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserCard = () => {
  const { user } = useAuth();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-green-100 mx-auto">
      <div className="flex items-center space-x-4">
        {/* User Profile Image */}
        <img
          className="w-16 h-16 rounded-full"
          src={user.photoURL} // Replace this with dynamic image URL
          alt="Profile"
        />

        {/* <div>
     
          <div className="font-bold text-lg">{name}</div>
          <div className="text-gray-500">{jobTitle}</div>
        </div> */}
        <div>
          {/* User Name and Job Title */}
          <div className="font-bold text-lg"> {user.displayName}</div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700"> {user.email}</p>

      {/* Actions */}
      <div className="mt-6 flex justify-between">
        <Link
          to={`/my-profile/edit/${user?.email}`}
          className="bg-gray-100 btn text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
