/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SingleProductCard = ({ product }) => {
  const { title, price, image_url, _id } = product;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm font-bold">{title}</h2>
        <p>
          ${""} {price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-xs btn-outline">
            <Link to={`/products/${_id}`}>See Options</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
