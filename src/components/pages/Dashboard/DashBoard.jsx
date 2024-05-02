import { useState } from "react";
import "./dashboard.css";
import MyScripts from "./MyScripts/MyScripts";
import { Link } from "react-router-dom";
import SharedScripts from "./MyScripts/SharedScripts";

const DashBoard = ({ toggleServicesPopup }) => {
  const [dashboardActive, setDashboardActive] = useState("myscripts");

  const handleDashboardActive = (active) => {
    setDashboardActive(active);
  };

  return (
    <section className="dashboard">
      <div className="sticky-bar">
        <div className="sticky-bar-nav-home-dashboard">
          <div className="sticky-bar-home-btn">
            <a className="home-btn" href="/">
              <img
                src="data:image/webp;base64,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"
                alt=""
              />
            </a>
            <a href="/dashboard">
              <div className="dashboard-btn">
                <span className="material-symbols-rounded">home</span>
                <div className="dashboard-btn-text">Dashboard</div>
              </div>
            </a>
          </div>
          <div className="sticky-bar-upgrade-create-profile">
            <Link to="/pricing">
              <div className="upgrade-btn">
                <span className="material-symbols-rounded">upgrade</span>
                <div className="upgrade-btn-text">Upgrade your plan</div>
              </div>
            </Link>

            <div onClick={toggleServicesPopup} className="create-script-btn">
              <span className="material-symbols-rounded">add_circle</span>
              <div className="create-script-btn-text">Create Script</div>
            </div>
            <a href="/profile" className="profile-btn">
              <img src="https://source.unsplash.com/100x100/?profile" alt="" />
            </a>
          </div>
        </div>

        <div className="sticky-bar-btn">
          <button
            className={`scripts-dashboard ${
              dashboardActive === "myscripts" ? "active" : ""
            }`}
            onClick={() => handleDashboardActive("myscripts")}
          >
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.333 4H8L6.667 2.667h-4c-.734 0-1.334.6-1.334 1.333v8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V5.333c0-.733-.6-1.333-1.334-1.333zm0 8H2.667V4h3.446l1.334 1.333h5.886V12zM8.72 9.36l-.46 1.973 1.74-1.02 1.74 1.02-.46-1.973 1.533-1.327-2.02-.173L10 6l-.793 1.86-2.02.173L8.72 9.36z"></path>
            </svg>
            <div className="scripts-text">My Scripts</div>
          </button>
          <button
            className={`scripts-dashboard ${
              dashboardActive === "shared script" ? "active" : ""
            }`}
            onClick={() => handleDashboardActive("shared script")}
          >
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.333 4H8L6.667 2.667h-4c-.734 0-1.327.6-1.327 1.333l-.007 8c0 .733.6 1.333 1.334 1.333h10.666c.734 0 1.334-.6 1.334-1.333V5.333c0-.733-.6-1.333-1.334-1.333zm0 8H2.667V4h3.446l1.334 1.333h5.886V12zm-7.06-2.387l1.06-1.053v2.773h1.334V8.56l1.06 1.06.94-.947L8.007 6 5.333 8.673l.94.94z"></path>
            </svg>
            <div className="scripts-text">Shared Scripts</div>
          </button>
        </div>
      </div>

      <div className="dashboard-content-banners-tab">
        <div className="dashboard-content-banners">
          <div className="dashboard-content-banner">
            <div className="dashboard-content-banner-icon">
              <span className="material-symbols-rounded">monetization_on</span>
            </div>
            <div className="dashboard-content-banner-text">
              <div className="dashboard-content-banner-textwapper">
                <h5>Referral Program</h5>
                <p>Join Our Referral Program and Start Earning Today!</p>
              </div>

              <a href="#">
                <span>Learn more </span>{" "}
                <span className="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="dashboard-content-banner">
            <div className="dashboard-content-banner-icon video-tutorials">
              <span className="material-symbols-rounded">smart_display</span>
            </div>
            <div className="dashboard-content-banner-text">
              <div className="dashboard-content-banner-textwapper">
                <h5>Video Tutorials</h5>
                <p>Learn how to utilize NolanAI features.</p>
              </div>

              <a href="https://www.youtube.com/@NolanAi/videos" target="_blank">
                <span>Learn more </span>{" "}
                <span className="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="dashboard-content-banner">
            <div className="dashboard-content-banner-icon">
              <span className="material-symbols-rounded">ballot</span>
            </div>
            <div className="dashboard-content-banner-text">
              <div className="dashboard-content-banner-textwapper">
                <h5>Lights, Camera, Feedback!</h5>
                <p>Help us make NolanAI even better!</p>
              </div>
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdziO0TN5NO2NVR6qHp-zKTXAbJfXGzfqQQGKN4xkwA_nOpXQ/viewform">
                <span>Take Survey</span>{" "}
                <span className="material-symbols-rounded">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {dashboardActive == "myscripts" ? (
        <div className="dashboard-content">
          <MyScripts />
        </div>
      ) : (
        ""
      )}
      {dashboardActive == "shared script" ? (
        <div className="dashboard-content-shared">
          <SharedScripts />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default DashBoard;
