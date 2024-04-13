import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy loading components
const Home = lazy(() => import("@/Pages/Home"));
const Gallery = lazy(() => import("@/Pages/Gallery"));
const About = lazy(() => import("@/Pages/About"));
const Faq = lazy(() => import("@/Pages/Faq"));
const NotFound404 = lazy(() => import("@/Pages/NotFound404"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading About...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<div>Loading Gallery...</div>}>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<div>Loading FAQ...</div>}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading FAQ...</div>}>
             <NotFound404/>
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
