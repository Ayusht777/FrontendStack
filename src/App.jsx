import AppRoutes from "@/Routes/AppRoutes";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />
        <meta property="og:title" content="FrontendStack" />
        <meta property="og:description" content="A UI Challenge Project For Dev" />
        <meta property="og:image" content="https://i.postimg.cc/qB5YjHz9/previewimage.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FrontendStack" />
        <meta name="twitter:description" content="A UI Challenge Project For Dev" />
        <meta name="twitter:image" content="https://i.postimg.cc/qB5YjHz9/previewimage.webp" />

        <title>FrontendStack</title>
        <link rel="icon" type="image/svg+xml" href="/BrandLogo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
      </Helmet>
      <AppRoutes />
    </>
  );
}

export default App;
