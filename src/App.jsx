// App.js
import React, { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import MapFooter from "./components/pages/Footer/MapFooter";
import "./App.css";
import DashBoard from "./components/pages/Dashboard/DashBoard";
import { AuthContext } from "./AuthContent";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import EditingPage from "./components/pages/EditingPage/EditingPage";

const App = () => {
  const [showScript, setShowScript] = useState(false);
  const isLoggedIn = useContext(AuthContext);
  const location = useLocation();

  const toggleShowScript = () => {
    setShowScript(!showScript);
  };

  return (
    <>
      <Navbar
        toggleServicesPopup={toggleShowScript}
        location={location}
        isLoggedIn={isLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/forstudios" element={<Forstudios />} />
        <Route path="/features" element={<FeaturesContent />} />
        <Route path="/blog" element={<Blog />} />

        {MapFeatures.map((feature) => (
          <Route
            key={feature.id}
            path={feature.path}
            element={feature.path_element}
          />
        ))}
        {MapBlog.map((blog) => (
          <Route key={blog.id} path={blog.path} element={blog.path_element} />
        ))}
        {MapFooter.map((item) => (
          <Route key={item.id} path={item.path} element={item.path_element} />
        ))}

        {isLoggedIn && (
          <>
            <Route
              path="/dashboard"
              element={<DashBoard toggleServicesPopup={toggleShowScript} />}
            />
            <Route
              path="/profile"
              element={<MyAccount toggleServicesPopup={toggleShowScript} />}
            />
            <Route path="/editor/:script" element={<EditingPage />} />
          </>
        )}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
      </Routes>

      <Footer location={location} />
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
