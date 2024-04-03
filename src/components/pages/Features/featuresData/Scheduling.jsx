import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function Scheduling() {
  return (
    <section className="features-data Scheduling">
      <FearutesBgTitle
        features_title={featuresData[3].feature_Title}
        features_title_span={featuresData[3].feature_logo}
      />
      <div className="features-data-content">
        <p>
          NolanAI Film Scheduling is a powerful feature that uses advanced
          algorithms and the power of AI to automatically sort your stripboard
          in the most efficient way for shooting. It also provides you with an
          approximate shooting duration per scene, which can be configured based
          on the number of cameras, takes, and complexity factors such as action
          sequences, costumes, and stunts.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F1M2nakQ5dMc8ShazsjrQv5&w=384&q=75"
          alt=""
        />
        <h3>Here are some of the benefits of using NolanAI Film Scheduling:</h3>

        <ul>
          <li>Save time and money:</li>
          <p>
            By automatically sorting your stripboard, NolanAI can help you save
            time and money on pre-production.
          </p>
          <li>Improve efficiency:</li>
          <p>
            NolanAI can help you shoot your film more efficiently by grouping
            scenes together that share common locations, actors, or crew.
          </p>
          <li>Get a more accurate estimate of shooting duration:</li>
          <p>
            NolanAI's ability to factor in complexity factors such as action
            sequences, costumes,{" "}
          </p>
          <p>
            {" "}
            and stunts can help you get a more accurate estimate of how long
            each scene will take to shoot.
          </p>
        </ul>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F4d37m4WNMO1ttBOwBkW5Ct&w=384&q=75"
          alt=""
        />
        <p>Here are some of the features of NolanAI Film Scheduling:</p>
        <ul>
          <li>Automatic stripboard sorting:</li>
          <p>
            NolanAI automatically sorts your stripboard based on a number of
            factors, such as location, actors, crew, and complexity.
          </p>
          <video
            controls
            src="https://videos.ctfassets.net/f1ifj4j3qw5p/2laOz8Xhp29iofJuN6IJDu/682e1b019a91aa0adfd401704be1e2f3/schedule_ordering.mp4"
          ></video>
          <li>Scene duration estimates:</li>
          <p>
            NolanAI provides you with an approximate shooting duration per
            scene, which can be configured based on the number of cameras,
            takes, and complexity factors.
          </p>
          <li>Customizable complexity factors:</li>
          <p>
            You can customize the complexity factors that NolanAI uses to
            estimate shooting duration, such as action sequences, costumes, and
            stunts.
          </p>
          <video src="https://videos.ctfassets.net/f1ifj4j3qw5p/42NzvLR8vnhN0pfklZasNt/3b132a1afc0c79fc25760f7f4e6e7cd3/schedule_time_est.mp4"></video>
          <li>Reports and insights:</li>
          <p>
            NolanAI provides you with reports and insights that can help you
            improve your scheduling efficiency.
          </p>
        </ul>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F1iSjAYKSC1TrYEdHnrMfhy&w=1080&q=75"
          alt=""
        />
      </div>
      <FeaturesButton />
    </section>
  );
}

export default Scheduling;
