import Link from "next/link";

const OHeader = () => {
  return (
<header className="relative bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url(/images/herobg.jpg)", height: "70vh"}}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white" >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Origin</h1>
        <hr className="w-40 border-t border-white mb-8" />
        {/* <nav className="flex flex-row space-x-8">
          <Link href="/papua-new-guinea">
            <a className="text-lg hover:underline">Papua New Guinea</a>
          </Link>
          <Link href="/vanuatu-solomon-islands">
            <a className="text-lg hover:underline">Vanuatu & Solomon Islands</a>
          </Link>
          <Link href="/west-africa-south-america">
            <a className="text-lg hover:underline">West Africa & South America</a>
          </Link>
        </nav> */}
        <nav className="flex flex-col md:flex-row md:space-x-8">
  <Link href="/papua-new-guinea">
    <a className="text-base md:text-lg hover:underline">Country 1</a>
  </Link>
  <Link href="/vanuatu-solomon-islands">
    <a className="text-base md:text-lg hover:underline">Country 2</a>
  </Link>
  <Link href="/west-africa-south-america">
    <a className="text-base md:text-lg hover:underline">Country 3</a>
  </Link>
</nav>

      </div>
    </header>
  );
};

export default OHeader;
