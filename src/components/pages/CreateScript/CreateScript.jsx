import React from "react";
import "./createscript.css";
import { useState } from "react";
import VideoShort from "./VideoShort";
import FeatureFilm from "./FeatureFilm";
import CreateScriptOption from "./CreateScriptOption";

const CreateScript = ({ toggleShowScript }) => {
  const [setoption, setSetoption] = useState("bothoptions");
const [selectedOption, setSelectedOption] = useState("Feature Film");
const handleOptionChange = () => {
  setSelectedOption("Video Short");
};
const FlimOptionChange = () =>{
  
  setSelectedOption("Feature Film");
}
  const onclicknext = () => {
    setSetoption(selectedOption);
  };
  const backButton = () => {
    setSetoption("bothoptions");
  };

  return (
    <section className="create-script">
      <div className="create-script-contents">
        <div className="create-script-content">
          <div className="create-script-title-close">
            <h2>Create a new script</h2>
            <div className="create-script-btn" onClick={toggleShowScript}>
              <span className="material-symbols-rounded">Close</span>
            </div>
          </div>
          {setoption === "bothoptions" && (
            <CreateScriptOption
              handleOptionChange={handleOptionChange}
              FlimOptionChange={FlimOptionChange}
              selectedOption={selectedOption}
              onclicknext={onclicknext}
              toggleShowScript={toggleShowScript}
            />
          )}
          {setoption === "Feature Film" && (
            <FeatureFilm
              backButton={backButton}
              toggleShowScript={toggleShowScript}
            />
          )}
          {setoption === "Video Short" && (
            <VideoShort
              toggleShowScript={toggleShowScript}
              backButton={backButton}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CreateScript;
