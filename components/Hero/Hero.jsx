import Link from "next/link";
import { Fade, Zoom } from "react-reveal";

const Hero = () => {
  return (
    <div
      className="z-0 h-screen min-h-screen bg-center bg-no-repeat bg-cover md:bg-right"
      style={{ backgroundImage: "url(/images/herobg.jpg)" }}
    >
      <div className="absolute inset-0 h-screen min-h-screen bg-black opacity-60"></div>
      <div className="container relative z-10 flex items-center w-full h-screen px-5 py-32 mx-auto">
        <div className="relative z-10 flex flex-col items-start w-full ml-40">
          {/* Dummy content */}
          <Fade left>
            <p className="w-full text-sm text-left text-white md:text-lg tracking-wide">
              Welcome to Ceylon Coffee & Cacao
            </p>
          </Fade>
          <Fade right>
            <h1 className="text-left pb-10 text-3xl font-bold text-white md:text-5xl lg:w-2/3 md:leading-[3.5rem] tracking-wide">
              Lorem ipsum dolor sit amet, consectetuer
            </h1>
          </Fade>
          <Zoom>
            <Link href="#LearnMore">
              <a className="text-white rounded-xl" style={{ textDecoration: "underline" }}>
                Learn More &#8594;
              </a>
            </Link>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Hero;
