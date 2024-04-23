import React from "react";

const Aaboutus = () => {
  return (
    <section className="relative bg-center bg-cover bg-no-repeat h-screen" style={{backgroundImage: "url(/images/herobg.jpg)"}}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Us</h1>
        <div className="flex justify-center">
          <div className="border-t border-white w-6 h-6 mt-4"></div>
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75V16.5l4.14-4.14a.75.75 0 0 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L9.25 16.5V3.75A.75.75 0 0 1 10 3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="border-t border-white w-6 h-6 mt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Aaboutus;
