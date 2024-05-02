import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { handleFormData } from "../Dashboard/MyScripts/ScriptData";

const VideoShort = ({ toggleShowScript, backButton }) => {
  const [videoFormData, setVideoFormData] = useState({
    id: generateRandomId(),
    title: "Untitled Video Short",
    socialMediaPlatform: "",
    videoTitleDec: "",
  });
  const navigate = useNavigate();

  const options = [
    { value: "TikTok", label: "TikTok" },
    { value: "Instagram Reels", label: "Instagram Reels" },
  ];
  function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const handleVideoSubmit = (e) => {
    e.preventDefault();
    setVideoFormData({
      id: generateRandomId(),
      title: "Untitled Video Short",
      socialMediaPlatform: "",
      videoTitleDec: "",
    });
    handleFormData(videoFormData)
    navigate("/dashboard");
    setTimeout(() => {
      toggleShowScript();
    }, 300);
  };

  const handleChange = (selectedOption) => {
    setVideoFormData({
      ...videoFormData,
      socialMediaPlatform: selectedOption.value,
    });
  };

  return (
    <form onSubmit={handleVideoSubmit} className="video-short">
      <div className="flex-box">
        <div className="create-script-input">
          <label className="video-title" htmlFor="title">
            Title:
          </label>
          <input
            id="video-title title"
            type="text"
            name="script_title"
            value={videoFormData.title}
            required
          />
        </div>
        <div className="create-script-input">
          <label className="video-title" htmlFor="platform">
            Social Media Platform:
          </label>
          <Select
            value={options.find(
              (option) => option.value === videoFormData.socialMediaPlatform
            )}
            onChange={handleChange}
            defaultValue={[options[0]]}
            options={options}
            required
          />
        </div>
        <div className="create-script-input">
          <label className="video-title" htmlFor="title-dec">
            Title Description:
          </label>
          <textarea
            id="video-title title-dec"
            value={videoFormData.videoTitleDec}
            onChange={(e) =>
              setVideoFormData({
                ...videoFormData,
                videoTitleDec: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="create-script-cancel-next">
        <div onClick={toggleShowScript} className="create-script-cancel-btn">
          Cancel
        </div>
        <div className="create-script-back-next">
          <div onClick={backButton} className="create-script-back">
            back
          </div>
          <button type="submit" className="create-script-submit">
            <div className="create-script-submit-text">Submit</div>
            <svg
              width="20"
              height="20"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.925 5.025l6.258 2.683-6.266-.833.008-1.85zm6.25 7.267l-6.258 2.683v-1.85l6.258-.833zM1.258 2.5L1.25 8.333 13.75 10l-12.5 1.667.008 5.833L18.75 10 1.258 2.5z"
                fillOpacity="0.96"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default VideoShort;
