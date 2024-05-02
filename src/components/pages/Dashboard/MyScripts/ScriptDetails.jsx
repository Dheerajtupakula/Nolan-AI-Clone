import React, { useState } from "react";
import { Link } from "react-router-dom";

const ScriptDetails = ({ script, index }) => {
  const [onShow, setOnShow] = useState(false);
  const [number, setNumber] = useState();

  const handleShowMore = (script_id) => {
    setNumber(script_id);
    setOnShow(!onShow);
  };
  return (
    <div key={index} className="myscript">
      <div className="myscript-header">
        <div className="myscript-header-title">
          <div className="myscript-header-title-text">
            {script.script_title}
          </div>
          <div className="myscript-header-last-seen">
            LAST EDITED {script.last_script_seen}
          </div>
        </div>
        <div
          className="myscript-header-more"
          onClick={() => handleShowMore(index, script.script_id)}
        >
          <span className="material-symbols-rounded">more_vert</span>

          {onShow && (
            <div className="more-options">
              <Link
                to={`/editor/${script.script_id}?data=${encodeURIComponent(
                  JSON.stringify(script.script_data)
                )}`}
              >
                <span className="material-symbols-rounded">
                  drive_file_rename_outline
                </span>
                <div className="more-options-link-text">Start Editing</div>
              </Link>
              <a href="#">
                <span className="material-symbols-rounded">list_alt</span>
                <div className="more-options-link-text">Screen Breakdown</div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">troubleshoot</span>
                <div className="more-options-link-text">Plot Hole Report</div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">newspaper</span>
                <div className="more-options-link-text">
                  Script Coverage Report
                </div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">
                  developer_board
                </span>
                <div className="more-options-link-text">Storyboard</div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">schedule</span>
                <div className="more-options-link-text">Scheduling</div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">movie_filter</span>
                <div className="more-options-link-text">Deck Builder</div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">share</span>
                <div className="more-options-link-text">Share Script</div>
              </a>
              <a href="#">
                <span className="material-symbols-rounded">delete</span>
                <div className="more-options-link-text">Delete Script</div>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="myscript-data">
        <div className="myscript-data-genre">
          <span>Genre</span>
          <h6>{script.script_genre.join(", ")}</h6>
        </div>
        <div className="myscript-data-synopsis">
          <span>Synopsis</span>
          <h6>{script.script_synopsis}</h6>
        </div>
      </div>
      <div className="myscript-footer">
        <div className="myscript-share">
          <span className="material-symbols-rounded">share</span>
        </div>
        <div className="myscript-link-tag">
          <Link
            to={`/editor/${script.script_id}?data=${encodeURIComponent(
              JSON.stringify(script.script_data)
            )}`}
            className="myscript-link editor-link"
          >
            <span className="material-symbols-rounded">movie_edit</span>
            <div className="myscript-link-text">Editor</div>
          </Link>
          <Link className="myscript-link breakDown">
            <span className="material-symbols-rounded">list_alt</span>
            <div className="myscript-link-text">Breakdown</div>
          </Link>
          <div className="myscript-link storyboard">
            <span className="material-symbols-rounded">developer_board</span>
            <div className="myscript-link-text">Storyboard</div>
          </div>
          <div className="myscript-link deck">
            <span className="material-symbols-rounded">movie_filter</span>
            <div className="myscript-link-text">Deck</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptDetails;
