import React from "react";

const ContactForm = () => {
  return (
    <section className="relative bg-center bg-cover bg-no-repeat h-screen" style={{backgroundImage: "url(/images/herobg.jpg)"}}>
      <div className="absolute inset-0 bg-black opacity-80 "></div>
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center text-white">
        <div className="md:w-1/2 p-8">
          <div className="text-left mt-36 ml-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 ">Get in Touch</h2>
            <p>Shri Sridharan</p>
            <p>+94 77 335 8671</p>
            <p>Address</p>
            <p>Pacific Islander Private Limited</p>
            <p>#09-03, 19 Keppel Road,</p>
            <p>Singapore 089058</p>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Any Questions?</h2>
            <p>Kindly complete this Contact Form & we will get back to you as soon as possible</p>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-white">Full Name</label>
                <input type="text" id="fullName" className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-white">Country</label>
                <input type="text" id="country" className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="telephone" className="block text-white">Telephone</label>
                <input type="tel" id="telephone" className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white focus:outline-none focus:border-gray-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white focus:outline-none focus:border-gray-500"></textarea>
              </div>
              <button type="submit" className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-300">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
