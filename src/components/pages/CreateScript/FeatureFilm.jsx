import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { handleFormData } from "../Dashboard/MyScripts/ScriptData";
import { AuthContext } from "../../../AuthContent";

const FeatureFilm = ({ toggleShowScript, backButton }) => {
  const [featuresFormData, setFeaturesFormData] = useState({
    flimTitle: "Untitled Screenplay",
    flimTitleDec: "",
    flimGenre: [],
  });
  const navigate = useNavigate();
  const isLogin = useContext(AuthContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeaturesFormData({
      ...featuresFormData,
      [name]: value,
    });
  };

  const handleGenreChange = (selectedOptions) => {
    const selectedGenres = selectedOptions.map((option) => option.value);
    setFeaturesFormData({
      ...featuresFormData,
      flimGenre: selectedGenres,
    });
  };

  const genreOptions = [
    { value: "Action", label: "Action" },
    { value: "Adventure", label: "Adventure" },
    { value: "Comedy", label: "Comedy" },
    { value: "Detective", label: "Detective" },
    { value: "Drama", label: "Drama" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Horror", label: "Horror" },
    { value: "History", label: "History" },
    { value: "Mystery", label: "Mystery" },
    { value: "Romance", label: "Romance" },
    { value: "Thriller", label: "Thriller" },
    { value: "Western", label: "Western" },
    { value: "Sci-fi", label: "Sci-fi" },
  ];

  const FeatureSubmit = (event) => {
    event.preventDefault();

    handleFormData(featuresFormData);

    setFeaturesFormData({
      flimTitle: "",
      flimTitleDec: "",
      flimGenre: [],
    });
    {
      isLogin ? navigate("/dashboard") : navigate("/login");
    }
    setTimeout(() => {
      toggleShowScript();
    }, 500);
  };

  return (
    <form onSubmit={FeatureSubmit} className="feature-film">
      <div className="features-film">
        <div className="create-script-input">
          <label className="flim-title" htmlFor="flimTitle">
            Title:
          </label>
          <input
            id="flim-title"
            type="text"
            name="flimTitle"
            value={featuresFormData.flimTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="suggest-titles-container">
          <span className="input-box">
            Suggest titles based on the synopsis
          </span>
          <button className="suggest-button" disabled>
            Suggest titles
          </button>
        </div>
        <div className="create-script-input">
          <label className="flim-title" htmlFor="flimTitleDec">
            Title Description:
          </label>
          <textarea
            id="flim-title-dec"
            name="flimTitleDec"
            value={featuresFormData.flimTitleDec}
            onChange={handleInputChange}
          />
        </div>
        <div className="create-script-input">
          <label className="video-title" htmlFor="flimGenre">
            Genre:
          </label>
          <Select
            isMulti
            name="flimGenre"
            options={genreOptions}
            value={genreOptions.filter((option) =>
              featuresFormData.flimGenre.includes(option.value)
            )}
            onChange={handleGenreChange}
            defaultValue={[genreOptions[2]]}
            className="basic-multi-select"
            classNamePrefix=""
            placeholder="Select Genre..."
            required
          />
        </div>
      </div>

      <div className="create-script-cancel-next">
        <button
          type="button"
          onClick={toggleShowScript}
          className="create-script-cancel-btn"
        >
          Cancel
        </button>
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

export default FeatureFilm;
