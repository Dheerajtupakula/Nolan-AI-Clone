import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function AIDeckBuilder() {
  return (
    <section className="features-data AIDeckBuilder">
      <FearutesBgTitle
        features_title={featuresData[0].feature_Title}
        features_title_span={featuresData[0].feature_logo}
      />
      <div className="features-data-content">
        <p>
          NolanAI Pitch Deck Builder is the ultimate tool for filmmakers looking
          to create professional-quality pitch decks quickly and easily. Our
          AI-powered platform analyzes your script coverage to extract key
          information, helping you craft a compelling narrative that will
          capture the attention of investors and producers. With NolanAI, you
          can also generate images and suggest actors based on your character
          descriptions, all within a user-friendly interface that makes the
          process a breeze. Take your pitch to the next level with NolanAI Pitch
          Deck Builder.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F63qQQ0ECUATx2nfn2MRMU7&w=640&q=75"
          alt=""
        />
        <ul>
          <li>
            Seamlessly integrate with your script coverage tool to streamline
            your workflow.
          </li>
          <li>
            Utilize our advanced recommendation engine to select the perfect
            cast that aligns seamlessly with your characters.
          </li>
          <li>
            Access our extensive library of movie references and actor profiles
            to enhance your project, or generate custom images using
            cutting-edge AI technology.
          </li>
        </ul>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F78zCQJBbkLFBtdK0Bd98m5&w=1080&q=75"
          alt=""
        />
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F1iSjAYKSC1TrYEdHnrMfhy&w=1080&q=75"
          alt=""
        />
      </div>
      <FeaturesButton />
    </section>
  );
}

export default AIDeckBuilder;
