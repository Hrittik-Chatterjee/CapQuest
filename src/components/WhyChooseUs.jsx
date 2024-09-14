const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="text-lg font-medium text-gray-900 mb-2">
              Trackable shipping
            </div>
            <p className="text-gray-600">Free shipping on orders over $49</p>
          </div>

          <div className="flex flex-col items-center ">
            <div className="text-lg font-medium text-gray-900 mb-2">
              Huge range
            </div>
            <p className="text-gray-600">Over 20,000 products in stock</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-lg font-medium text-gray-900 mb-2">
              Favorable return policy
            </div>
            <p className="text-gray-600">100 days to return</p>
          </div>
        </div>

        {/* Payment and Shipping Logos */}
        <div className="flex justify-center space-x-4 mt-12">
          <img
            src="https://a.storyblok.com/f/132956/57x40/9e44a692f7/visa-box-borderless.png/m/fit-in/57x40/filters:quality(75)"
            alt="Visa"
            className="h-8"
          />
          <img
            src="https://a.storyblok.com/f/132956/57x40/a3ffd850d6/master-card-box-borderless.png/m/fit-in/57x40/filters:quality(75)"
            alt="MasterCard"
            className="h-8"
          />
          <img
            src="https://a.storyblok.com/f/132956/57x40/8f83b63f1f/paypal-box-borderless.png/m/fit-in/57x40/filters:quality(75)"
            alt="PayPal"
            className="h-8"
          />
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <img
            src="https://a.storyblok.com/f/132956/160x29/920a661815/usps-logo.png/m/fit-in/160x80/filters:quality(75)"
            alt="USPS"
            className="h-8"
          />
          <img
            src="https://a.storyblok.com/f/132956/1024x600/87171188d4/fedex-logo.png/m/fit-in/160x80/filters:quality(75)"
            alt="FedEx"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
