import { useEffect, useState } from "react";
import SingleProductCard from "../components/SingleProductCard";
import { HashLoader } from "react-spinners";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState(""); // New state for sorting
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

  // Filter products by category
  let filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  // Sort products based on selected sort option
  if (sortOption === "lowToHigh") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Sorting options */}
            <div className="flex justify-center space-x-4 my-4">
              <button
                className="btn"
                onClick={() => setSortOption("lowToHigh")}
              >
                Price: Low to High
              </button>
              <button
                className="btn"
                onClick={() => setSortOption("highToLow")}
              >
                Price: High to Low
              </button>
            </div>

            {/* page content here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <SingleProductCard key={product._id} product={product} />
              ))}
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
                  onClick={() => setSelectedCategory("basic")}
                >
                  Basic Caps
                </button>
              </li>
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("BaseBall")}
                >
                  Baseball Caps
                </button>
              </li>
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("CowBoy")}
                >
                  Cow Boy Hats
                </button>
              </li>

              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("FlatVisor")}
                >
                  Flat Visor Caps
                </button>
              </li>
              <li>
                <button
                  className="btn my-4"
                  onClick={() => setSelectedCategory("Bucket")}
                >
                  Bucket Hats
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
