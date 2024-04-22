import Image from "next/image";
import { Fade } from "react-reveal";
import Map from "./map";

const AboutC = () => {
  return (
    <>
      <div className="flex items-center justify-center px-32 bg-white text-black">
        <div className="text-center">
          <h2 className="text-2xl  mb-8">
          <hr className="border-t border-gray-300 my-8" />

            Our primary sources of Cocoa are West Africa, Pacific Islands, and
            South America, where our ownership of export companies allows us to
            maintain a stable and efficient supply chain. When you choose WR
            Carpenter Trading, you re choosing a partner committed to delivering
            top-quality Cocoa while prioritizing sustainability and
            traceability.
            <hr className="border-t border-gray-300 my-8" />

          </h2>
          <Map/>
        </div>
      </div>
    </>
  );
};

export default AboutC;
