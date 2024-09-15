/* eslint-disable react/prop-types */
const ImageCard = ({ imageUrl, title, description, imageRight }) => {
  return (
    <div
      className={`flex flex-col-reverse  ${
        imageRight
          ? "md:flex-row-reverse bg-[#dbd8d8]"
          : "md:flex-row bg-[#cfb59f]"
      } items-center bg-white p-8 `}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center ml-6">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">{description}</p>
        <button className="bg-black text-white py-2 px-4 btn rounded-full w-28 hover:bg-gray-800">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ImageCard;
