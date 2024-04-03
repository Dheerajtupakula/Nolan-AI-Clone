import React from "react";
import "./features.css";
import featuresData from "../../Data/featuresData";
import { Link } from "react-router-dom";
function FeaturesContent() {
  const toTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
  }
  return (
    <section className="features">
      <div className="features-bgc-title">
        <div className="features-bgc">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2FaboutUs.webp&w=1200&q=75"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="features-titles">
          <h1 className="features-title">FEATURES</h1>
          <h3 className="features-title-dec">
            See what NolanAI comprehensive toolkit can do for you.
          </h3>
        </div>
      </div>
      <div className="features-contents">
        {featuresData.map((feature) => {
          return (
            <div key={feature.id} className="features-content">
              <div className="features-content-flex">
                <div className={`features-content-img ${feature.id}`}>
                  <span className="material-symbols-rounded">
                    {feature.feature_logo}
                  </span>
                </div>
                <div className="features-content-title-para">
                  <h2 className="features-content-title">
                    {feature.feature_Title}
                  </h2>
                  <p className="features-content-para">
                    {feature.feature_para}
                  </p>
                </div>
              </div>
              <Link onClick={toTop} to={feature.feature_to_btn}>Explore Feature</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturesContent;
