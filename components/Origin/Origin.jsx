import React from "react";

const Origin = () => {
  return (
    <div className="bg-fixed bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/cocoastaticbg.jpg')" }}>
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="p-8">
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="text-white text-4xl lg:text-5xl font-bold leading-tight relative z-10">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
              <p>Aenean commodo ligula eget dolor.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="p-8 text-white">
            <p>
              To ensure a robust supply chain, we primarily source Cocoa from our own export companies located in Ivory Coast, Ghana, Nigeria, Cameroon, Guinea, and Ecuador. This strategic approach enables us to offer a strong and dependable supply of Cocoa beans.
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Origin;
