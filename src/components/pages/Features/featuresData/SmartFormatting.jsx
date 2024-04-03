import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function SmartFormatting() {
  return (
    <section className="features-data SmartFormatting">
      <FearutesBgTitle
        features_title={featuresData[8].feature_Title}
        features_title_span={featuresData[8].feature_logo}
      />
      <div className="features-data-content">
        <p>
          Script Smart uses advanced algorithms to automatically format your
          text into a screenplay format. With Script Smart, you can save time
          and focus on writing by letting the software handle the formatting for
          you. This feature also provides suggestions and corrections to help
          ensure that your screenplay adheres to industry standards and is
          formatted correctly.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F4g7heVMUmdApfzp3aQgdqY&w=384&q=75"
          alt=""
        />
        <h3>Key Features:</h3>
        <ul>
          <li>Scene Detection:</li>
          <ul>
            <li>
              Script formatting tools automatically detect and highlight
              individual scenes within the screenplay.
            </li>
            <li>
              This feature helps writers and editors visualize the script's
              structure and ensures proper scene transitions.
            </li>
          </ul>
          <li>Character Identification:</li>
          <ul>
            <li>
              The software recognizes characters in the script and distinguishes
              their names from dialogues.
            </li>
            <li>
              It ensures consistency in character names and their proper
              introduction in the script.
            </li>
          </ul>
          <li>Dialogue Extraction:</li>
          <ul>
            <li>
              Automatic formatting identifies and separates dialogues from
              character names, actions, and scene descriptions.
            </li>
            <li>
              It helps writers focus on crafting realistic and engaging
              dialogue.
            </li>
          </ul>
          <li>Transition Detection:</li>
          <ul>
            <li>
              The tool identifies and flags various scene transitions, such as
              "CUT TO," "FADE IN," and "DISSOLVE."
            </li>
            <li>This assists in maintaining script flow and clarity.</li>
          </ul>
          <li>Suggestions for Industry-Standard Formatting:</li>
          <ul>
            <li>
              Script formatting software suggests changes to the script text to
              comply with industry-standard screenplay formatting rules, such as
              the use of "INT." and "EXT." for scene headings, adhering to
              character name formatting, and capitalizing character
              introductions.
            </li>
            <li>It improves script presentation and readability.</li>
          </ul>
          <li>Text Type Change Recommendations:</li>
          <ul>
            <li>
              The tool may suggest changes to text type or formatting for
              different screenplay elements, like using italics for character
              actions or bold for character names.
            </li>
            <li>
              It helps writers achieve a polished and professional script
              appearance.
            </li>
          </ul>
        </ul>
      </div>
      <FeaturesButton />
    </section>
  );
}

export default SmartFormatting;
