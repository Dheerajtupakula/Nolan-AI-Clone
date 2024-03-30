import React from "react";
import "./createscript.css";
import { useState } from "react";

const CreateScript = ({ toggleShowScript }) => {
  const [setoption, setSetoption] = useState("bothoptions");
  const [selectedOption, setSelectedOption] = useState("Feature Film");
  const [videoTitle, setVideoTitle] = useState("Untitled Video Short");
  const [socialMediaPlatform, setSocialMediaPlatform] = useState("Tik Tok");
  const [videoTitleDec, setVideoTitleDec] = useState("");
  const [flimTitle, setFlimTitle] = useState("Untitled Screenplay");
  const [flimGenre, setFlimGenre] = useState("");
  const [flimTitleDec, setFlimTitleDec] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const onclicknext = () => {
    setSetoption(selectedOption);
  };
  const backButton = () => {
    setSetoption("bothoptions");
  };

  const handleTitleChange = (event) => {
    setVideoTitle(event.target.value);
  };
  const handleFlimTitleChange = (event) => {
    setFlimTitle(event.target.value);
  };

  const handleSocialMediaPlatformChange = (event) => {
    setSocialMediaPlatform(event.target.value);
  };
  const handleFlimGenreChange = (event) => {
    setFlimGenre(event.target.value);
  };

  const handleTitleDecChange = (event) => {
    setVideoTitleDec(event.target.value);
  };
  const handleFlimTitleDecChange = (event) => {
    setFlimTitleDec(event.target.value);
  };

  const submitVideoButton = () => {
    let videoDetails = [
      { video_title: videoTitle },
      { Platform: socialMediaPlatform },
      { Title_dec: videoTitleDec },
    ];
    console.log(videoDetails);
  };
  const submitFlimButton = () => {
    let flimDetails = [
      { Title: flimTitle },
      { Platform: flimGenre },
      { "Title dec": flimTitleDec },
    ];
    console.log(flimDetails);
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
          <div className="selecting-options">
            {setoption === "bothoptions" && (
              <div className="bothoptionsection">
                <p>Select the format you want to write a script for:</p>

                <div className="create-script-radios">
                  <label
                    htmlFor="features"
                    className={
                      selectedOption === "Feature Film" ? "selected" : ""
                    }
                  >
                    <input
                      id="features"
                      name="features"
                      type="radio"
                      value="Feature Film"
                      checked={selectedOption === "Feature Film"}
                      onChange={handleOptionChange}
                    />
                    <div className="option-titles">
                      <div className="option-title">Feature Film</div>
                      <div className="option-title-dec">
                        Begin crafting your feature film screenplay with the
                        assistance of Co-Pilot's power.
                      </div>
                    </div>
                  </label>

                  <label
                    htmlFor="youtube"
                    className={
                      selectedOption === "Video Short" ? "selected" : ""
                    }
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
                        Take your video shorts to new heights by utilizing AI to
                        craft your scripts in screenplay format.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            )}
            {setoption === "Feature Film" && (
              <div className="feature-film">
                <div className="features-film">
                  <div className="create-script-input">
                    <label className="flim-title" htmlFor="title">
                      Title:
                    </label>
                    <input
                      id="flim-title title"
                      type="text"
                      value={flimTitle}
                      onChange={handleFlimTitleChange}
                      required
                    />
                  </div>
                  <div className="flim-title-suggest">
                    <p>Suggest titles based on the synopsis</p>
                    <div className="flim-title-suggest-btn">
                      <div>Suggest title</div>
                      <span class="material-symbols-rounded">psychology</span>
                    </div>
                  </div>
                  <div className="create-script-input">
                    <label className="flim-title" htmlFor="title-dec">
                      Title Description:
                    </label>
                    <textarea
                      id="flim-title title-dec"
                      value={flimTitleDec}
                      onChange={handleFlimTitleDecChange}
                    />
                  </div>
                  <div className="create-script-input">
                    <label className="video-title" htmlFor="genre">
                      Genre:
                    </label>
                    <select
                      id="flim-title genre"
                      value={flimGenre}
                      onChange={handleFlimGenreChange}
                      required
                    >
                      <option value="Genre">Genre</option>
                      <option value="Action">Action</option>
                      <option value="Adverture">Adverture</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Detective">Detective</option>
                      <option value="Drama">Drama</option>
                      <option value="Fantsay">Fantsay</option>
                      <option value="Horror">Horror</option>
                      <option value="History">History</option>
                      <option value="Msytery">Mystery</option>
                      <option value="Romance">Romance</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Western">Western</option>
                      <option value="Sci-fi">Sci-fi</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
            {setoption === "Video Short" && (
              <div className="video-short">
                <div className="create-script-input">
                  <label className="video-title" htmlFor="title">
                    Title:
                  </label>
                  <input
                    id="video-title title"
                    type="text"
                    value={videoTitle}
                    onChange={handleTitleChange}
                    required
                  />
                </div>
                <div className="create-script-input">
                  <label className="video-title" htmlFor="platform">
                    Social Media Platform:
                  </label>
                  <select
                    id="video-title platform"
                    value={socialMediaPlatform}
                    onChange={handleSocialMediaPlatformChange}
                  >
                    <option value="TikTok">TikTok</option>
                    <option value="Instagram Reels">Instagram Reels</option>
                  </select>
                </div>
                <div className="create-script-input">
                  <label className="video-title" htmlFor="title-dec">
                    Title Description:
                  </label>
                  <textarea
                    id="video-title title-dec"
                    value={videoTitleDec}
                    onChange={handleTitleDecChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="create-script-cancel-next">
          <div onClick={toggleShowScript} className="create-script-cancel-btn">
            Cancel
          </div>
          <div className="create-script-back-next">
            {setoption !== "bothoptions" && (
              <div onClick={backButton} className="create-script-back">
                back
              </div>
            )}
            {setoption === "bothoptions" && (
              <div onClick={onclicknext} className="create-script-next-btn">
                <div className="create-script-next-text">Next</div>
                <span className="material-symbols-rounded">arrow_forward</span>
              </div>
            )}
            {setoption === "Video Short" && (
              <div onClick={submitVideoButton} className="create-script-submit">
                <div className="create-script-submit-text">Submit</div>
                <svg
                  width="20"
                  height="20"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.925 5.025l6.258 2.683-6.266-.833.008-1.85zm6.25 7.267l-6.258 2.683v-1.85l6.258-.833zM1.258 2.5L1.25 8.333 13.75 10l-12.5 1.667.008 5.833L18.75 10 1.258 2.5z"
                    fill-opacity="0.96"
                  ></path>
                </svg>
              </div>
            )}
            {setoption === "Feature Film" && (
              <div onClick={submitFlimButton} className="create-script-submit">
                <div className="create-script-submit-text">Submit</div>
                <svg
                  width="20"
                  height="20"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.925 5.025l6.258 2.683-6.266-.833.008-1.85zm6.25 7.267l-6.258 2.683v-1.85l6.258-.833zM1.258 2.5L1.25 8.333 13.75 10l-12.5 1.667.008 5.833L18.75 10 1.258 2.5z"
                    fill-opacity="0.96"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateScript;
