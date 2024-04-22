import Image from "next/image";
import { Fade } from "react-reveal";

const AboutB = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <Fade left cascade>
          <div className="flex items-center px-10 py-10 my-20 lg:px-0 lg:pr-10 xl:pl-10">
            <div className="justify-items-center">
              <h1 className="w-full mb-5 text-4xl font-bold text-center lg:text-left">
                Lorem ipsum dolor
              </h1>
              <p className="text-center lg:text-left xl:pr-14">
                sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
                sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel,
              </p>
            </div>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="justify-center hidden w-full py-10 my-20 space-x-5 md:px-10 lg:flex aspect-auto">
            <div className="space-y-5">
              <div className="h-64 -translate-x-24 xl:translate-x-0 w-64 rounded-xl shadow-xl bg-[url('/images/1.png')] bg-cover aspect-auto"></div>
              <div className="h-64 -translate-x-24 xl:translate-x-0 w-64 rounded-xl shadow-xl bg-[url('/images/2.png')] bg-cover aspect-auto"></div>
            </div>
            <div className="hidden xl:block h-full w-72 rounded-xl shadow-xl bg-[url('/images/3.png')] bg-cover aspect-auto"></div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default AboutB;
