import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function AICopilot() {
  return (
    <section className="features-data AICopilot">
      <FearutesBgTitle
        features_title={featuresData[7].feature_Title}
        features_title_span={featuresData[7].feature_logo}
      />
      <div className="features-data-content">
        <p>
          Nolan provides an array of AI-related features that are expertly
          designed to enhance your productivity and foster your creativity,
          offering you a diverse toolkit to fuel your inspiration and streamline
          your work.
        </p>
        <h3>ASK NOLAN FOR SUGGESTION</h3>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F2guAhb2ovIo6QdC2hNRFlR&w=384&q=75"
          alt=""
        />
        <p>
          To help you create high-quality story, Nolan offers a powerful editing
          feature. With Ask Nolan, you can easily enhance the quality of your
          text by highlighting the selected text, correcting any spelling and
          grammar errors, and adjusting the tone of the paragraph as
          necessary.This feature provides you with the flexibility to customize
          your text and make it more engaging and effective.
        </p>
        <h3>CHANGE YOUR CHARACTER ACCENT</h3>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F6VjMW79VPEuJzmg2o1QYq5&w=384&q=75"
          alt=""
        />
        <p>
          Personalize your character and make it truly unique. "Change Accent"
          allows you to change your character's accent, making it sound more
          distinct and authentic. Whether you want to add a touch of personality
          to your character or create a character that stands out, this feature
          provides you with the flexibility to customize your character's accent
          to match your preferences. With this feature, you can create a
          character that truly represents you and brings your story to life.
        </p>
        <h3>AI CO-PILOT</h3>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F6cwhVWeS88FcOCZJiVQckC&w=384&q=75"
          alt=""
        />
        <p>
          In AI CO-PILOT mode, the system will autonomously highlight dialogue
          scenes and paragraphs. You have the capability to request the AI's
          assistance in proposing dialogue continuations or paragraph
          extensions. Additionally, you can prompt the system to create a
          preliminary draft image of a scene.
        </p>
      </div>
      <FeaturesButton />
    </section>
  );
}

export default AICopilot;
