import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>{process.env.APP_NAME}</title>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* Dummy metadata */}
      <meta
        name="keywords"
        content="Dummy Keywords, Web Development, Web, Development, Service, Web Apps"
      />
      <meta name="author" content="Dummy Author" />
      <meta name="robots" content="Dummy Robots" />
      <meta property="og:title" content="Dummy Title" />
      <meta
        property="description"
        content="Dummy Description"
      />
      <meta
        property="og:description"
        content="Dummy Description"
      />
    </Head>
  );
};

export default Header;
