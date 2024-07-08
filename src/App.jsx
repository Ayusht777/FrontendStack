import AppRoutes from "@/Routes/AppRoutes";
import { Helmet } from 'react-helmet';
import useDocumentTitle from "@/Hooks/useDocumentTitle";
function App() {
  const title = useDocumentTitle();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/svg+xml" href="/BrandLogo.svg" />
      </Helmet>
      <AppRoutes></AppRoutes>

    </>
  );
}

export default App;
