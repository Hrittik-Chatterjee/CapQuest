import { useEffect, useState } from "react";
import SingleProductCard from "../components/SingleProductCard";
import { HashLoader } from "react-spinners";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
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
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
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
            {/* Top category selection for small devices */}
            <div className="block lg:hidden w-full my-4">
              <select
                className="select select-bordered w-full"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                <option value="">All Categories</option>
                <option value="basic">Basic Caps</option>
                <option value="BaseBall">Baseball Caps</option>
                <option value="CowBoy">Cow Boy Hats</option>
                <option value="FlatVisor">Flat Visor Caps</option>
                <option value="Bucket">Bucket Hats</option>
              </select>
            </div>

            {/* Sorting dropdown */}
            <div className="flex justify-end space-x-4 my-4 w-full">
              <div className="relative inline-block">
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) => setSortOption(e.target.value)}
                  value={sortOption}
                >
                  <option value="">Recommended</option>
                  <option value="lowToHigh">Price: Low to High</option>
                  <option value="highToLow">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Page content here with responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <SingleProductCard key={product._id} product={product} />
              ))}
            </div>
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
