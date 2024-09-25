import useAuth from "../hooks/useAuth";

const AddProducts = () => {
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const stock_quantity = form.stock_quantity.value;

    const userEmail = user.email;

    const data = {
      title,
      image_url,
      category,
      description,
      price,
      stock_quantity,

      userEmail,
    };

    console.log(data);

    await fetch(
      "https://ecommerce-dashboard-server-awlu.onrender.com/products",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <section className="bg-slate-200 ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Add a new Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Name of the Product
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Image Url
              </label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Image Url"
                required=""
              />
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Product Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="your name"
                required=""
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                name="category"
              >
                <option selected="basic" value="basic">
                  Basic Caps
                </option>
                <option value="BaseBall">BaseBall Caps</option>
                <option value="CowBoy">Cow Boy Hats</option>
                <option value="Bucket">Bucket Hats </option>
                <option value="FlatVisor">Flat Visor Cap</option>
              </select>
            </div>

            {/* <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="12"
                  required=""
                />
              </div> */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Product Description
              </label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stock_quantity"
                id="stock_quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Add Product Quantity"
                required=""
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
