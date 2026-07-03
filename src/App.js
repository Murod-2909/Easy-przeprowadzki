import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/404/NotFound";
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/AboutUs/aboutUs"));
const Service = lazy(() => import("./pages/Service/Service"));
const Price = lazy(() => import("./pages/Price/Price"));
const Contact = lazy(() => import("./pages/ContactUs/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/Legal/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Legal/Terms"));

const routes = [
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/services", element: Service },
  { path: "/price", element: Price },
  { path: "/contact", element: Contact },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms", element: Terms },
];

const RoutesContainer = () => (
    
  <Router>
    <Suspense fallback={<Spinner position="full" />}>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route, key) => {
            const RouteComponent = ScrollTop(route.element);
            return (
              <Route
                key={key}
                path={route.path}
                element={<RouteComponent />}
              />
            );
          })}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default RoutesContainer;
