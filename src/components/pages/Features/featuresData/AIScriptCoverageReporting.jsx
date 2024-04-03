import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function AIScriptCoverageReporting() {
  return (
    <section className="features-data AIScriptCoverageReporting">
      <FearutesBgTitle
        features_title={featuresData[1].feature_Title}
        features_title_span={featuresData[1].feature_logo}
      />
      <div className="features-data-content">
        <p>
          Film script coverage is a crucial step in the filmmaking process,
          serving as a valuable tool for producers, executives, and filmmakers
          alike. It involves a detailed analysis and evaluation of a screenplay
          by a professional script reader.
        </p>
        <p>
          <b> NolanAI's Script Coverage</b> feature is like having a
          super-efficient assistant that can save you a ton of time and money.
          With just a few clicks, you'll receive a detailed script report
          covering all the essential aspects.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F4kyeUFV1HAnq5VNmmwCBU9&w=384&q=75"
          alt=""
        />
        <div>
          <h3>Key Features:</h3>
          <ul>
            <li>
              <b>Quick Overview:</b>
              Instant insights on your script's Logline, Impression, Synopsis,
              and a straightforward Overall Comments section. NolanAI's AI
              simplifies the process, providing you with a clear understanding
              of your script's strengths and areas for improvement.
            </li>
            <li>
              <b>Character Breakdown:</b>
              Explore your characters in-depth with details on their bios, ages,
              and ethnicities. NolanAI's advanced algorithms analyze your
              characters, offering valuable insights to enhance your
              understanding of the story.
            </li>
            <li>
              <b>Effortless Export: </b>Need to share your findings with others?
              NolanAI makes it easy with a one-click export feature. Create a
              polished PDF report that includes all the critical elements of
              your script coverage, ready to be shared or stored.
            </li>
          </ul>
        </div>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F2KJT6fOlU1rZNZDtpb66TA&w=384&q=75"
          alt=""
        />
        <div>
          <h3>Benefits:</h3>
          <ul>
            <li>
              <b>Time-Saving: </b>NolanAI's AI streamlines the process, allowing
              you to focus on refining your script without spending excessive
              time on evaluations.
            </li>
            <li>
              <b>Cost-Efficient: </b> Cut down on expenses associated with
              extensive script reviews. NolanAI's automation minimizes the need
              for time-consuming evaluations, providing accurate results
              efficiently.
            </li>
            <li>
              <b>Comprehensive Understanding: </b>Gain a holistic view of your
              screenplay, from overall impressions to detailed character
              information. NolanAI's analysis ensures you have the necessary
              insights to make informed decisions about your script's
              development.
            </li>
          </ul>
        </div>
        <FeaturesButton />
      </div>
    </section>
  );
}

export default AIScriptCoverageReporting;
