import { useEffect, useState } from "react";
import SingleProductCard from "../components/SingleProductCard";
import { HashLoader } from "react-spinners";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ecommerce-dashboard-server-awlu.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  const handleDeleteProduct = (_id) => {
    setProducts(products.filter((product) => product._id !== _id));
  };
  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <HashLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* page content here */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <SingleProductCard
                    key={product._id}
                    product={product}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </div>
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("")}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("shirt")}
                >
                  Shirt
                </button>
              </li>
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("t-shirt")}
                >
                  Tshirt
                </button>
              </li>
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("pant")}
                >
                  Pant
                </button>
              </li>

              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("hat")}
                >
                  Hats
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
