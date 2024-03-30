import React from "react";
import "./forstudios.css";

function ForStudios() {
  return (
    <section className="forstudios">
      <div className="forstudios-bgc-title">
        <div className="forstudios-bgc">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-for-studios.webp&w=1200&q=75"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="forstudios-titles">
          <h1 className="forstudios-title">
            For Film And Entertainment Production Companies
          </h1>
          <h4 className="forstudios-title-dec">
            All in one software for small and medium studios
          </h4>
        </div>
      </div>

      <div className="forstudios-head-contents">
        <div className="forstudios-head-content">
          <div className="forstudios-head-img">
            <span class="material-symbols-rounded">psychology</span>
          </div>
          <div className="forstudios-head">
            <h3 className="forstudios-head-title">All-in-One Editor</h3>
            <p className="forstudios-head-dec">
              Experience the future of script editing with our AI-powered
              co-pilot. Enhance your creative projects with intelligent
              assistance that simplifies the editing process, making it faster
              and more precise.
            </p>
          </div>
        </div>
        <div className="forstudios-head-content">
          <div className="forstudios-head-img">
            <span class="material-symbols-rounded">analytics</span>
          </div>
          <div className="forstudios-head">
            <h3 className="forstudios-head-title">
              Analytics & Pre-Production Management
            </h3>
            <p className="forstudios-head-dec">
              Streamline your pre-production process with comprehensive
              analytics. Make data-driven decisions, plan your projects
              effectively, and ensure every element of your production is
              optimized for success.
            </p>
          </div>
        </div>
        <div className="forstudios-head-content">
          <div className="forstudios-head-img">
            <span class="material-symbols-rounded">waving_hand</span>
          </div>
          <div className="forstudios-head">
            <h3 className="forstudios-head-title">
              Customization & Integration{" "}
            </h3>
            <p className="forstudios-head-dec">
              Tailor NolanAI to suit your studio's unique needs. Our platform
              offers seamless integration with industry-standard tools, ensuring
              that it fits perfectly into your existing workflow.
            </p>
          </div>
        </div>
      </div>
      <div className="forstudios-librarys">
        <div className="forstudios-library">
          <div className="library-img">
            <img
              src="	https://www.nolanai.app/_next/image?url=%2Fimages%2Fnotebook-iso-gradient.png&w=384&q=75"
              alt=""
            />
          </div>
          <div className="forstudios-library-dec">
            <h2>Library of 2000+ Stories</h2>
            <h5>
              Access a vast collection of unique stories with full copyright
              transfer for further development. Unlock a wealth of creative
              possibilities and seamlessly transform your next blockbuster
              screenplay from these stories.
            </h5>
          </div>
        </div>
        <p className="library-para">
          If you are looking for a way to implement creativity and unique
          storytelling with just a few clicks, then look no further than
          NolanAI. Unlock efficiency for your team in an instant. Join NolanAI
          Enterprise. For more details, contact us.
        </p>
        <div className="forstudios-email">
          <a href="mailto:enterprise@nolanai.app">enterprise @ nolanai.app</a>
        </div>
      </div>
    </section>
  );
}

export default ForStudios;
