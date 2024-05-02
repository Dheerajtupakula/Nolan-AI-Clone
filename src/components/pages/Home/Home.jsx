import React, { useContext } from "react";
import { useState } from "react";
import HomeFeatures from "../../Data/HomeFeatures";
import "./home.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthContent";

function Home() {
  const isLogin = useContext(AuthContext);
  const [showVideo, setShowVideo] = useState(true);

  const handleShowVideo = () => {
    console.log("handleShowVideo called");
    setShowVideo(!showVideo);
  };

  return (
    <section className="home">
      <div className="home-hero-sec">
        <div className="home-bgc-img">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-landing-main%20copy.webp&w=1080&q=75"
            alt="Background"
          />
        </div>
        <div className="home-titles">
          <div className="title-img">
            <img
              src="https://www.nolanai.app/_next/image?url=https%3A%2F%2Fnolan-space.sfo3.cdn.digitaloceanspaces.com%2Fassets%2Fhero_logo.png&w=640&q=75"
              alt="Title Image"
            />
          </div>
          <h1 className="home-title">Film Industry Service Hub</h1>
          <h3 className="home-title-dec">
            Helping bring the next masterpiece to the big screens.
          </h3>
          <div className="home-title-btns">
            {!isLogin && (
              <>
                <NavLink to="/login">
                  <button className="title-btn nolanAI">
                    <span class="material-symbols-rounded">edit</span>
                    <div className="btn-text">Get NolanAI Free</div>
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="title-btn nolanAI-login">
                    <span class="material-symbols-rounded">login</span>
                    <div className="btn-text">Login</div>
                  </button>
                </NavLink>
              </>
            )}
            {isLogin && (
              <NavLink to="/dashboard">
                <button className="title-btn nolanAI">
                  <span class="material-symbols-rounded">edit</span>
                  <div className="btn-text">Go To Dashboard</div>
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
      <div class="home-head-contents">
        <div class="home-head-content">
          <div class="home-head-img green-bg">
            <span class="material-symbols-rounded">auto_awesome</span>
          </div>
          <div class="home-head-titles">
            <h3 class="home-head-title">Editor with AI-Copilot</h3>
            <h5 class="home-head-dec">
              Enhance your screenwriting experience with AI Copilot, which
              suggests ideas for you.
            </h5>
          </div>
        </div>
        <div class="home-head-content">
          <div class="home-head-img blue-bg">
            <span class="material-symbols-rounded">list_alt</span>
          </div>
          <div class="home-head-titles">
            <h3 class="home-head-title">Automatic Script Breakdown</h3>
            <h5 class="home-head-dec">
              Script breakdown can be accomplished with a single click.
            </h5>
          </div>
        </div>
        <div class="home-head-content">
          <div class="home-head-img org-bg">
            <span class="material-symbols-rounded">developer_board</span>
          </div>
          <div class="home-head-titles">
            <h3 class="home-head-title">AI Storyboard</h3>
            <h5 class="home-head-dec">
              Automatically create shots by analyzing each scene within seconds.
              Generate shot images for inspiration.
            </h5>
          </div>
        </div>
      </div>
      <div class="secure">
        <div class="secure-img">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fshield.webp&w=640&q=75"
            alt="Secure"
          />
        </div>
        <div class="secure-content">
          <h1 class="secure-title">Secure</h1>
          <h3 class="secure-title-dec">
            Don’t worry, your data is secure and encrypted with NOLAN
          </h3>
          <p class="secure-para">
            We take your privacy and the ownership of your work very seriously.
            We respect your creative content and have no rights over it. We do
            not use your work for training our models or for any other purposes
            without your explicit consent. Your scripts and content remain your
            intellectual property. So, when you create/upload or edit content
            using our software, you retain full ownership of the intellectual
            property. We do not claim any rights to your scripts or any other
            content you produce. Your creative work is yours and yours alone
          </p>
        </div>
      </div>
      <div class="home-scripts-content">
        <div class="home-scripts">
          <h1 class="home-scripts-title">Free Script Writing Software</h1>
          <h3 class="home-scripts-title-more">And More</h3>
          <p class="home-scripts-para">
            NolanAI isn't just a screenwriting tool, it's a filmmaker's dream
            studio. From crafting your script with AI assistance to seamlessly
            pre-producing your masterpiece, all within one intuitive platform,
            NolanAI empowers you to tell your story without losing your creative
            spark.
          </p>
          <button class="home-scripts-btn">
            <div class="Button_text__ILwkE">Explore our premium plan!</div>
            <span class="material-symbols-rounded">arrow_forward</span>
          </button>
        </div>
        <div className="home-scripts-video">
          <div className="script-img">
            <img
              onClick={() => handleShowVideo()}
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2FdashboardBanner.webp&w=384&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="home-testimonials">
        <h1>Testimonials</h1>
        <h3>What Our Customers Say</h3>
        <div class="home-testimonials-producer">
          <div class="producer-img">
            <img
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fcustomers%2Fmike_wech.jpeg&w=64&q=75"
              alt="Producer"
            />
          </div>
          <h3 class="producer-name">Mike Wech</h3>
          <h5 class="producer-content">PRODUCER • EDITOR • WRITER</h5>
          <p class="producer-dec">
            NolanAI has the ability to be a game changer for producers. What
            used to take days could soon take hours and the technology is
            constantly improving. I was happy that the developers were quick to
            address the issues and eager to learn how the program can become
            more efficient for producers. The incorporated new features that we
            asked for and are eager to help filmmakers streamline production.
            Highly recommended.
          </p>
          <div class="producer-imdb">
            <img
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2Ficons%2Fimdb.png&w=32&q=75"
              alt="IMDb Logo"
            />
          </div>
        </div>
      </div>
      <div class="home-creators">
        <h1 class="home-creator-title">Meet Your Fellow Creators at NolanAI</h1>
        <h4 class="home-creator-dec">
          Fueling the Creative Fire: Where Thousands Shape Their Stories
        </h4>
        <div class="home-creator-users">
          <div class="home-creator-user">
            <div className="creator-user-img">
              <span class="material-symbols-rounded">supervisor_account</span>
            </div>
            <h1>+10000</h1>
            <h4>Registered users</h4>
          </div>
          <div class="home-creator-user">
            <div className="creator-user-img">
              <span class="material-symbols-rounded">developer_board</span>
            </div>
            <h1>+3000</h1>
            <h4>Storyboards created</h4>
          </div>
          <div class="home-creator-user">
            <div className="creator-user-img">
              <span class="material-symbols-rounded">summarize</span>
            </div>
            <h1>+18000</h1>
            <h4>Scripts written</h4>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-titleContainer">
          <h1 className="home-features-title">FEATURES</h1>
          <h4 className="home-features-dec">
            Explore what the NolanAI platform can do
          </h4>
        </div>
        <div className="home-features-contents">
          {HomeFeatures.map((feature, index) => (
            <div
              key={index}
              className={`home-features-content ${
                index % 2 === 0 ? "even" : "odd"
              } `}
            >
              <img
                src={feature.featuresImg}
                alt=""
                className="home-features-img"
              />
              <div className="home-features-img-content">
                <div className={`features-img ${feature.id}`}>
                  <span className={feature.featuresSpanclass}>
                    {feature.featuresSpan}
                  </span>
                </div>
                <h1 className="features-img-title">{feature.featuresTitle}</h1>
                <p className="features-img-dec">{feature.featuresPara}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="home-features-btn">
          <NavLink to="/features">
            <button type="button" class="home-feature-btn">
              <span class="material-symbols-rounded">explore</span>
              <div class="Button_text__ILwkE">Explore All Features</div>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home;
