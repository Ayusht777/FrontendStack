import AppRoutes from "@/Routes/AppRoutes";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark" />

        <meta property="og:url" content="https://frontendstack.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FrontendStack" />
        <meta property="og:description" content="A UI Challenge Project" />
        <meta property="og:image" content="https://iili.io/dBtVcej.md.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="frontendstack.vercel.app" />
        <meta property="twitter:url" content="https://frontendstack.vercel.app/" />
        <meta name="twitter:title" content="FrontendStack" />
        <meta name="twitter:description" content="A UI Challenge Project" />
        <meta name="twitter:image" content="https://iili.io/dBtVcej.md.png" />
        <title>FrontendStack</title>
        <link rel="icon" type="image/svg+xml" href="/BrandLogo.svg" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      </Helmet>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <AppRoutes />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
