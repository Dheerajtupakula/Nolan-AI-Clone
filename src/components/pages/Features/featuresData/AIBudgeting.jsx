import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function AIBudgeting() {
  return (
    <section className="features-data AIBudgeting">
      <FearutesBgTitle
        features_title={featuresData[2].feature_Title}
        features_title_span={featuresData[2].feature_logo}
      />
      <div className="features-data-content">
        <p>
          Imagine creating a film budget that's not just accurate, but also
          optimized for efficiency. With NolanAI's new AI budgeting feature,
          that's exactly what you get.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F3vGvuKAeFg0UZTmlp4NC51&w=384&q=75"
          alt=""
        />
        <h3>AI FORECASTING</h3>
        <p>
          NolanAI's AI budgeting goes beyond simple calculations. It leverages
          the power of artificial intelligence to{" "}
          <b> forecast your film's budget based on your script</b>. Simply
          upload your script, and our AI engine will analyze it, identifying key
          factors that influence budget, such as:
        </p>
        <div>
          <ul>
            <li>Number of characters and locations:</li>
            <p>
              The more characters and locations, the more complex and
              potentially expensive your film will be.
            </p>
            <li>Action sequences and special effects:</li>
            <p>These elements can add significantly to your budget.</p>
            <li>Dialogue and set design:</li>
            <p>Even seemingly small details can impact costs.</p>
          </ul>
        </div>
        <p>
          Based on this analysis, NolanAI generates a{" "}
          <b> comprehensive budget forecast</b>, giving you a clear picture of
          your film's financial needs.
        </p>
        <h3>AI BUDGET BREAKDOWN</h3>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F5zo4ErdZejOVKvLKzShLtP&w=384&q=75"
          alt=""
        />
        <div>
          <ul>
            <li>Predefined budget allocation:</li>
            <p>
              Set your desired budget amount, and NolanAI will{" "}
              <b>optimize the allocation across different categories</b>,
              ensuring you get the most out of every dollar.
            </p>
            <li>AI-driven recommendations:</li>
            <p>
              Receive suggestions on how to{" "}
              <b> save costs without compromising your vision.</b>
            </p>
            <li>Real-time updates:</li>
            <p>
              Track your budget in real-time and make adjustments as needed.
            </p>
          </ul>
        </div>
        <h3>The benefits of using NolanAI's AI budgeting:</h3>
        <div>
          <ul>
            <li>Increased accuracy:</li>
            <p>
              Eliminate guesswork and get a budget that's truly reflective of
              your film's needs.
            </p>
            <li>Improved efficiency:</li>
            <p>
              Optimize your budget allocation and avoid unnecessary spending.
            </p>
            <li>Greater control:</li>
            <p>
              Stay on top of your finances and make informed decisions
              throughout the filmmaking process.
            </p>
            <li>Reduced stress:</li>
            <p>
              Focus on your creative vision knowing your budget is in good
              hands.
            </p>
          </ul>
        </div>
        <h3>NolanAI's AI budgeting is the perfect tool for:</h3>
        <ul>
          <li>
            Independent filmmakers looking to make the most of their limited
            resources.
          </li>
          <li>
            Established production companies seeking to streamline their
            budgeting process.
          </li>
          <li>Anyone who wants to create a film without breaking the bank.</li>
        </ul>
      </div>
      <FeaturesButton />
    </section>
  );
}

export default AIBudgeting;
