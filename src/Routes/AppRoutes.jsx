
import { Suspense, lazy } from "react";
import Loader from "@/Utils/Loader/Loader";
import Layout from '@/Routes/Layout'
const Home = lazy(() => import("@/Pages/Home"));
const Gallery = lazy(() => import("@/Pages/Gallery"));
const About = lazy(() => import("@/Pages/About"));
const Faq = lazy(() => import("@/Pages/Faq"));
const PreviewPage = lazy(() => import("@/Pages/PreviewPage"));
const NotFound404 = lazy(() => import("@/Pages/NotFound404"));
const ComponentNotFound404 = lazy(() => import("@/Pages/ComponentNotFound404"));
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element: <Suspense fallback={<Loader />} ><Home /></Suspense>
      },
      {
        path: "/gallery",
        element: <Suspense fallback={<Loader />} ><Gallery /></Suspense>
      },
      {
        path: "/gallery/PreviewPage/:ComponentName",
        element: <Suspense fallback={<Loader />} ><PreviewPage /></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<Loader />} ><About /></Suspense>
      },
      {
        path: "/faq",
        element: <Suspense fallback={<Loader />} ><Faq /></Suspense>
      },
      {
        path: "*",
        element: <Suspense fallback={<Loader />} ><NotFound404 /></Suspense>
      },
      {
        path: "/ComponentNotFound404",
        element: < Suspense fallback={< Loader />} ><ComponentNotFound404 /></Suspense >,

      }
    ]
  }

])
const AppRoutes = () => <RouterProvider router={routes} />

export default AppRoutes;
