import React from "react";
import "./pricing.css";
import pricings from "../../Data/pricings";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Pricing() {
  const [currentPrice, setCurrentPrice] = useState("threeMonths");
  const [activeBtn, setActiveBtn] = useState("threeMonths");

  const handlePriceChange = (priceType) => {
    setCurrentPrice(priceType);
    setActiveBtn(priceType);
  };

  return (
    <section className="pricing">
      <div className="pricing-bgc-title">
        <div className="pricing-bgc">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-for-studios.webp&w=1200&q=75"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="pricing-titles">
          <h6 className="pricing-currentpage">
            NOLAN// <span> PRICING</span>
          </h6>
          <h1 className="pricing-title">Pricing</h1>
        </div>
      </div>
      <div className="pricing-details">
        <div className="plan-buttons">
          <button
            className={`plan-btn ${activeBtn === "monthly" ? "active" : ""}`}
            onClick={() => handlePriceChange("monthly")}
          >
            Monthly
          </button>
          <button
            className={`plan-btn ${
              activeBtn === "threeMonths" ? "active" : ""
            }`}
            onClick={() => handlePriceChange("threeMonths")}
          >
            Every 3 months
          </button>
          <button
            className={`plan-btn ${activeBtn === "Annually" ? "active" : ""}`}
            onClick={() => handlePriceChange("Annually")}
          >
            Annually
          </button>
        </div>
        <div className="pricing-plans">
          {pricings.map((plan, index) => (
            <div key={index} className="pricing-plan">
              <div className={`plan-title ${plan.title}`}>{plan.title}</div>
              <div className="plan-content">
                <p className="plan-content-para">{plan.para}</p>
                <p className={`plan-content-price ${plan.title}`}>
                  {currentPrice === "monthly" && `$${plan.price.monthly}`}{" "}
                  {currentPrice === "threeMonths" && (
                    <div className="threemonths-plans">
                      <div className="price-plan ">
                        ${plan.price.threeMonths}
                      </div>
                      <div className="price-plan-contentprice">
                        {plan.price.contentthreeMonths}
                      </div>
                      <div className="price-plan-actualprice">
                        {plan.price.actualthreeMonths}
                      </div>
                    </div>
                  )}{" "}
                  {currentPrice === "Annually" && (
                    <div className="annualy-plans">
                      <div className="price-plan">${plan.price.Annually}</div>
                      <div className="price-plan-contentprice">
                        {plan.price.contentAnnually}
                      </div>
                      <div className="price-plan-actualprice">
                        {plan.price.actualAnnually}
                      </div>
                    </div>
                  )}
                </p>
              </div>
              <div className="detail-features">
                <p className="detail-features-title">
                  {plan.detail_features_title}
                </p>
                <ul>
                  {plan.detail_features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <button className="subscribe-btn">
                <div className="subscribe-btn-text">Subscribe</div>
                <span className="material-symbols-rounded">add_circle</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="pricing-discount">
        <div className="pricing-discount-img">
          <span className="material-symbols-rounded">school</span>
        </div>
        <div className="pricing-discount-content">
          <h1 className="pricing-discount-title">For Students - 50% discount</h1>
          <h3 className="pricing-discount-title-dec">
            Student Exclusive:
            <b> Get a 50% discount on our annual subscription! </b>
            Email us at
            <a href="mailto:discount@nolanai.app">
              {" "}
              discount@nolanai.app{" "}
            </a>{" "}
            from the email you used to register on our platform, and receive
            your personalized promo code. Boost your learning and creativity
            with NolanAI today!
          </h3>
        </div>
      </div>
      <div className="enterprise">
        <div className="enterprise-img">
          <span className="material-symbols-rounded">recent_actors</span>
        </div>
        <div className="enterprise-content">
          <h1 className="enterprise-title">Enterprise</h1>
          <h3 className="enterprise-title-dec">
            Didn’t find the options you were looking for? If you’re a large team
            looking for a custom solution, we’ve got you covered!
          </h3>
          <p className="enterprise-para">
            All features unlimited in Pro plan and custom solutions
          </p>
          <NavLink to="/forstudios">
            <button className="enterprise-btn">
              <div className="enterprise-btn-text">See More</div>
              <span className="material-symbols-rounded">forward_to_inbox</span>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
