import Head from "next/head";

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 5.0, user-scalable=yes, shrink-to-fit=no"
    />
    <title>CompSAt</title>
    <meta
      name="description"
      content="Compsat" //need content
    ></meta>
    <link rel="apple-touch-icon" sizes="180x180" href="/static/meta/logo.svg" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/meta/logo.svg"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/meta/logo.svg"
    />
    <link rel="shortcut icon" href="/static/meta/logo.svg" />
    <link rel="manifest" href="/assets/meta/site.webmanifest" />
    {/* Meta for Facebook */}
    <meta property="og:title" content="CompSAt" key="title" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/assets/meta/image.png" /> {/*change*/}
    <meta property="og:description" content="Compsat" />
    {/* Meta for Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@compsat" />
    <meta name="twitter:title" content="CompSAt" />
    <meta name="twitter:description" content="CompSAt" />
    <meta name="twitter:image" content="/assets/meta/image.png" />
    {/* Add to homescreen for Chrome on Android. Fallback for manifest.json */}
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="CompSAt" />
    {/* Add to homescreen for Safari on iOS */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="CompSAt" />
    <link
      rel="stylesheet"
      type="text/css"
      href="/assets/stylesheets/nprogress.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Rubik:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </Head>
);

export default Meta;
