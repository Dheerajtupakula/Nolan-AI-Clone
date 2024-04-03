import React from 'react'

const FearutesBgTitle = ({features_title, features_title_span}) => {
  return (
    <div className="features-bgc-title">
      <div className="features-bgc">
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fimages%2FaboutUs.webp&w=1200&q=75"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="features-titles">
        <h6 className="features-currentpage">
          <a href="/">NOLAN//</a> <a href="/features">FEATURES//</a>
          <span>{features_title}</span>
        </h6>
        <h1 className="features-title">
          <div className="features-title-logo AI-deck-builder">
            <span className="material-symbols-rounded">
              {features_title_span}
            </span>
          </div>
          <div className="features-title-text">{features_title}</div>
        </h1>
      </div>
    </div>
  );
}

export default FearutesBgTitle