import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const product = useLoaderData();
  console.log(product);

  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const [image_url, setImage_Url] = useState(product.image_url);
  const [price, setPrice] = useState(product.price);
  const [stock_quantity, setStock_quantity] = useState(product.stock_quantity);

  const handleUpdate = async (e) => {
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    const price = form.price.value;
    const stock_quantity = form.stock_quantity.value;

    const data = {
      title,
      image_url,
      category,
      description,
      price,
      stock_quantity,
    };

    await fetch(
      `https://ecommerce-dashboard-server-awlu.onrender.com/products/${product._id}`,
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
  };

  return (
    <section className="bg-slate-200 ">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">
          Update This Product
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Product Name
              </label>
              <input
                type="text"
                name="reipename"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
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
                value={image_url}
                onChange={(e) => setImage_Url(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Image Url"
                required
              />
            </div>
            {/* <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Id
              </label>
              <input
                type="number"
                name="id"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
              />
            </div> */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Product Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Price"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="your name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                name="category"
              >
                <option value="basic"> Basic Caps</option>
                <option value="BaseBall">BaseBall Caps</option>
                <option value="CowBoy">Cow Boy Hats</option>
                <option value="Bucket">Bucket Hats </option>
                <option value="FlatVisor">Flat Visor Cap</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stock_quantity"
                id="stock_quantity"
                value={stock_quantity}
                onChange={(e) => setStock_quantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Add Product Quantity"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditProducts;
