import React, { useState } from "react";

const CreateScriptOption = ({
  handleOptionChange,
  FlimOptionChange,
  selectedOption,
  toggleShowScript,
  onclicknext,
}) => {
  return (
    <div className="bothoptionsection">
      <div className="flex-box">
        <p className="bothoptionsection-head">
          Select the format you want to write a script for:
        </p>

        <div className="create-script-radios">
          <label
            htmlFor="features"
            className={selectedOption === "Feature Film" ? "selected" : ""}
          >
            <input
              id="features"
              name="features"
              type="radio"
              value="Feature Film"
              checked={selectedOption === "Feature Film"}
              onChange={FlimOptionChange}
            />
            <div className="option-titles">
              <div className="option-title">Feature Film</div>
              <div className="option-title-dec">
                Begin crafting your feature film screenplay with the assistance
                of Co-Pilot's power.
              </div>
            </div>
          </label>

          <label
            htmlFor="youtube"
            className={selectedOption === "Video Short" ? "selected" : ""}
          >
            <input
              id="youtube"
              name="youtube"
              type="radio"
              value="Video Short"
              checked={selectedOption === "Video Short"}
              onChange={handleOptionChange}
            />
            <div className="option-titles">
              <div className="option-title">Video Short</div>
              <div className="option-title-dec">
                Take your video shorts to new heights by utilizing AI to craft
                your scripts in screenplay format.
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="create-script-cancel-next">
        <div onClick={toggleShowScript} className="create-script-cancel-btn">
          Cancel
        </div>

        <div onClick={onclicknext} className="create-script-next-btn">
          <div className="create-script-next-text">Next</div>
          <span className="material-symbols-rounded">arrow_forward</span>
        </div>
      </div>
    </div>
  );
};

export default CreateScriptOption;
