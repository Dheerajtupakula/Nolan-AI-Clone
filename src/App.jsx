import Navbar from "./components/pages/Navbar/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Forstudios from "./components/pages/ForStudios/Forstudios";
import Aboutus from "./components/pages/Aboutus/Aboutus";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Pricing from "./components/pages/Pricing/Pricing";
import FeaturesContent from "./components/pages/Features/FeaturesContent";
import Blog from "./components/pages/Blog/Blog";
import CreateScript from "./components/pages/CreateScript/CreateScript";
import MapFeatures from "./components/pages/Features/MapFeatures";
import MapBlog from "./components/pages/Blog/MapBlog";
import { Route, Routes } from "react-router";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [showScript, setShowScript] = useState(false);

  const toggleShowScript = () => {
    setShowScript(!showScript);
  };

  return (
    <>
      <Navbar toggleServicesPopup={toggleShowScript} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/aboutus" index element={<Aboutus />} />
        <Route path="/pricing" index element={<Pricing />} />
        <Route path="/forstudios" element={<Forstudios />} />
        <Route path="/features" element={<FeaturesContent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />

        {MapFeatures.map((feature) => {
          return (
            <Route
              key={feature.id}
              path={feature.path}
              element={feature.path_element}
            />
          );
        })}

        {MapBlog.map((blog) => {
          return (
            <Route key={blog.id} path={blog.path} element={blog.path_element} />
          );
        })}
      </Routes>
      <Footer />
      {showScript && (
        <CreateScript
          showScript={showScript}
          toggleShowScript={toggleShowScript}
        />
      )}
    </>
  );
};

export default App;
