/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AddedProductCard = ({ product, onDelete }) => {
  const token = localStorage.getItem("token");
  const { title, price, image_url, _id } = product;

  const handleDelete = async () => {
    await fetch(
      `https://ecommerce-dashboard-server-awlu.onrender.com/products/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(_id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className=" w-80 h-56" src={image_url} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">
            ${""} {price}
          </div>
        </h2>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-xs btn-outline">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn btn-primary btn-xs btn-outline">
            <Link to={`/products/edit/${_id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="btn  btn-error btn-xs btn-outline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedProductCard;
