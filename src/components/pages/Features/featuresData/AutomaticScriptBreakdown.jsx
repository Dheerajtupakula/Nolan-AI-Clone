import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function AutomaticScriptBreakdown() {
  return (
    <section className="features-data AutomaticScriptBreakdown">
      <FearutesBgTitle
        features_title={featuresData[9].feature_Title}
        features_title_span={featuresData[9].feature_logo}
      />
      <div className="features-data-content">
        <p>
          Automatic script breakdown is a valuable tool for film and television
          production that streamlines the process of dissecting a screenplay
          into its various elements, enabling filmmakers, production managers,
          and other stakeholders to plan, budget, and schedule a project with
          greater efficiency. This feature combines the power of technology,
          natural language processing, and industry-specific knowledge to
          analyze a script and extract crucial information, facilitating the
          pre-production phase of filmmaking.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F76F13sDe8AljUfchLdR4jz&w=384&q=75"
          alt=""
        />
        <ul>
          <li>Scene Analysis:</li>
          <ul>
            <li>
              Automatic script breakdown software scans the screenplay to
              identify and extract individual scenes, creating a comprehensive
              list of all scenes within the script.
            </li>
            <li>
              It may identify scene headings, transitions, or other indicators
              to delineate scene boundaries accurately.
            </li>
          </ul>
          <li>Character Identification:</li>
          <ul>
            <li>
              The tool recognizes and lists all the characters within each
              scene, indicating their presence, speaking lines, and any relevant
              character notes.
            </li>
            <li>
              It assists in tracking character involvement throughout the script
              and helps plan for casting and scheduling.
            </li>
          </ul>
          <li>Location and Set Information:</li>
          <ul>
            <li>
              The software identifies and compiles information about the
              settings, locations, and sets mentioned in the script.
            </li>
            <li>
              It may categorize locations by type (interior, exterior, specific
              places) and provide details about any special requirements or
              notes related to these settings.
            </li>
          </ul>
          <li>Props and Costumes:</li>
          <ul>
            <li>
              Automatic script breakdown can identify and itemize props and
              costumes mentioned in each scene, helping in the planning and
              acquisition of these elements.
            </li>
            <li>
              This feature can also generate lists of specific props and costume
              changes for each character or scene.
            </li>
          </ul>
          <li>Timing and Day/Night Differentiation: </li>
          <ul>
            <li>
              The tool determines the timing of each scene (day or night) and
              provides an overall sense of the script's temporal structure.
            </li>
            <li>This information aids in scheduling and lighting decisions.</li>
          </ul>
          <li>Suggested Budget and Scheduling:</li>
          <ul>
            <li>
              By extracting all the necessary details from the script, automatic
              script breakdown software can provide valuable insights into the
              estimated budget, shooting schedule, and resource requirements.
            </li>
            <li>
              It assists production managers and financiers in making informed
              decisions.
            </li>
          </ul>
          <li>Collaboration and Export:</li>
          <ul>
            <li>
              Users can collaborate and share the breakdown information with
              team members, allowing for seamless communication and planning.
            </li>
            <li>
              The software often allows for the export of breakdown reports in
              various formats, such as spreadsheets, PDFs, or specialized
              production software integrations.
            </li>
          </ul>
          <li>Customization and Notes:</li>
          <ul>
            <li>
              Users can add custom information, notes, or specific production
              details to scenes, characters, and elements for a more tailored
              breakdown.
            </li>
            <li>
              This feature enables teams to account for unique project
              requirements.
            </li>
          </ul>
        </ul>
      </div>
      <FeaturesButton />
    </section>
  );
}

export default AutomaticScriptBreakdown;
