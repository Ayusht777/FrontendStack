import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "@/Utils/Loader/Loader";
const Home = lazy(() => import("@/Pages/Home"));
const Gallery = lazy(() => import("@/Pages/Gallery"));
const About = lazy(() => import("@/Pages/About"));
const Faq = lazy(() => import("@/Pages/Faq"));
const PreviewPage = lazy(() => import("@/Pages/PreviewPage"));
const NotFound404 = lazy(() => import("@/Pages/NotFound404"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<Loader />}>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          path="/gallery/PreviewPage/:ComponentName"
          element={
            <Suspense fallback={<Loader />}>
              <PreviewPage />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<Loader />}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound404 />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
