import { useContext, useState } from "react";
import "./myaccounts.css";
import { AuthContextOut } from "../../../AuthContent";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [MyAccountActive, setMyAccountActive] = useState("userInfo");
  const LogOut = useContext(AuthContextOut);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    bio: "",
    imdbUrl: "",
    xUrl: "",
    instagramUrl: "",
    theradsUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      email: "",
      fullName: "",
      bio: "",
      imdbUrl: "",
      xUrl: "",
      instagramUrl: "",
      theradsUrl: "",
    });
  };
  const RedirecttoHome = () => {
    LogOut();
    navigate("/");
  };
  const handleMyAccountActive = (active) => {
    setMyAccountActive(active);
  };
  return (
    <section className="myaccount">
      <div className="sticky-bar">
        <div className="sticky-bar-nav-home-dashboard">
          <div className="sticky-bar-myprofile-home-btn">
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
            <a href="/profile">
              <div className="myaccount-btn">
                <span className="material-symbols-rounded">person</span>
                <div className="dashboard-btn-text">My Account</div>
              </div>
            </a>
          </div>
          <div className="sticky-bar-small-screens">
            <a href="/dashboard">
              <span className="material-symbols-rounded">arrow_back</span>
            </a>
            <div className="dashboard-btn-text">My Account</div>
          </div>
          <div className="sticky-bar-logout">
            <button onClick={RedirecttoHome}>
              <span className="material-symbols-rounded">logout</span>
              <div className="logout-btn-text">LogOut</div>
            </button>
          </div>
        </div>
        <div className="sticky-bar-btn">
          <div
            className={`user-Information ${
              MyAccountActive === "userInfo" ? "active" : ""
            }`}
            onClick={() => handleMyAccountActive("userInfo")}
          >
            <span width="5px" className="material-symbols-rounded">
              person
            </span>
            <div className="scripts-text">User Info</div>
          </div>
          <div
            className={`user-Information ${
              MyAccountActive === "ReferralProgram" ? "active" : ""
            }`}
            onClick={() => handleMyAccountActive("ReferralProgram")}
          >
            <span width="10px" className="material-symbols-rounded">
              record_voice_over
            </span>
            <div className="scripts-text">Referral Program</div>
          </div>
        </div>
      </div>
      <div className="my-account-content">
        {MyAccountActive == "userInfo" && (
          <div className="my-account-profile">
            <div className="personal-info">
              <div className="personal-info-title">
                <h2>Personal Information</h2>
              </div>
              <div className="personal-details">
                <div className="personal-details-img">
                  <img src="https://source.unsplash.com/200x200/?user" alt="" />
                </div>
                <form onSubmit={handleProfileSubmit}>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <label>Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <label>Bio:</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                  <br />
                  <label>IMDB Profile URL:</label>
                  <input
                    type="url"
                    name="imdbUrl"
                    value={formData.imdbUrl}
                    onChange={handleChange}
                  />
                  <br />
                  <label>X URL:</label>
                  <input
                    type="url"
                    name="xUrl"
                    value={formData.xUrl}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Instagram URL:</label>
                  <input
                    type="url"
                    name="instagramUrl"
                    value={formData.instagramUrl}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Therads URL:</label>
                  <input
                    type="url"
                    name="theradsUrl"
                    value={formData.theradsUrl}
                    onChange={handleChange}
                  />
                  <br />
                  <button type="submit">Save Changes</button>
                </form>
              </div>
            </div>
            <div className="personal-info-progress">
              <div className="personal-AI-requests">
                <div className="personal-info-title">
                  <h2>AI Requests</h2>
                </div>
                <div className="AI-requests-content">
                  <div className="AI-requests-content-item">
                    <div className="AI-requests-content-itemName">
                      Images Generated:
                    </div>
                    <div className="AI-requests-content-itemLimit">0/5</div>
                  </div>
                  <div className="AI-requests-content-item">
                    <div className="AI-requests-content-itemName">
                      AI Requests:
                    </div>
                    <div className="AI-requests-content-itemLimit">1/30</div>
                  </div>
                  <div className="AI-requests-content-item">
                    <div className="AI-requests-content-itemName">
                      Brainstorming Requests:
                    </div>
                    <div className="AI-requests-content-itemLimit">0/100</div>
                  </div>
                  <div className="AI-requests-content-item">
                    <div className="AI-requests-content-itemName">
                      Create Scene Requests:
                    </div>
                    <div className="AI-requests-content-itemLimit"> 0/0</div>
                  </div>
                </div>
              </div>
              <div className="personal-subscription-details">
                <div className="personal-info-title">
                  <h2>Subscription Details</h2>
                </div>
                <div className="subscription-details-content">
                  <div className="subscription-details-content-item">
                    <div className="subscription-details-content-itemName">
                      Plan:
                    </div>
                    <div className="subscription-details-content-itemLimit">
                      Free Forever
                    </div>
                  </div>
                  <div className="subscription-details-content-item">
                    <div className="subscription-details-content-itemName">
                      Status:
                    </div>
                    <div className="subscription-details-content-itemLimit active">
                      Active
                    </div>
                  </div>
                </div>
                <a className="subscription-details-btn" href="/pricing">
                  <div className="subscription-details-btn-text">
                    Manage Subscription
                  </div>
                  <span className="material-symbols-rounded">update</span>
                </a>
              </div>
              <div className="personal-about">
                <div className="personal-info-title">
                  <h2>About</h2>
                </div>
                <div className="personal-about-content">
                  <div className="personal-about-content-item">
                    <div className="personal-about-content-itemName">
                      Application Version:
                    </div>
                    <div className="personal-about-content-itemLimit">
                      v2.8.5
                    </div>
                  </div>
                  <div className="personal-about-content-item">
                    <div className="personal-about-content-itemName">
                      Build Date:
                    </div>
                    <div className="personal-about-content-itemLimit">
                      Apr 16, 2024
                    </div>
                  </div>
                  <div className="personal-about-content-item">
                    <div className="personal-about-content-itemName release-history">
                      Release History
                    </div>
                  </div>
                </div>
                <div className="subscription-details-btn block-btn">
                  <div className="subscription-details-btn-text">
                    Update to the New Version.
                  </div>
                  <span className="material-symbols-rounded">update</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {MyAccountActive == "ReferralProgram" && (
          <div className="ReferralProgram-content">
            <div className="ReferralProgram-content-img">
              <span className="material-symbols-rounded">
                record_voice_over
              </span>
            </div>
            <h5>
              Join our Referral Program and invite your creative friends to the
              NolanAI family.
            </h5>
            <h5>
              For every friend who signs up for a paid subscription, you'll earn
              a cool 5% cashback!
            </h5>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
