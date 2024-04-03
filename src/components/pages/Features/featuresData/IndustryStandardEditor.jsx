import React from "react";
import "../features-data.css";
import FearutesBgTitle from "./FearutesBgTitle";
import FeaturesButton from "./FeaturesButton";
import featuresData from "../../../Data/featuresData";

function IndustryStandardEditor() {
  return (
    <section className="features-data IndustryStandardEditor">
      <FearutesBgTitle
        features_title={featuresData[11].feature_Title}
        features_title_span={featuresData[11].feature_logo}
      />
      
      <div className="features-data-content">
        <p>
          Nolan's Industry Standard Screenplay Writing Editor offers a
          comprehensive set of features that empower writers to create scripts
          that meet professional standards. It streamlines the collaborative
          process, enhances the readability and clarity of your work, and
          provides the tools needed to effectively structure your screenplay.
          With Nolan, you can focus on your storytelling, knowing that your
          script is in capable hands when it comes to formatting and
          organization.
        </p>
        <h3>Industry Standard Formatting</h3>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2FulwUXFOoKm5bqFwfg8Rv6&w=384&q=75"
          alt=""
        />
        <p>
          Nolan's Screenplay Writing Editor is your dependable tool for adhering
          to the rigorous formatting standards of the film and television
          industry. This feature ensures that your script is impeccably
          structured and formatted from the very beginning. Scene headings,
          action lines, character names, dialogue, and transitions are
          effortlessly and automatically formatted according to industry
          conventions, eliminating the need for manual adjustments. This means
          you can focus on your creative process while Nolan takes care of the
          presentation.
        </p>
        <h3>History Tracking</h3>
        <p>
          Maintaining a record of the evolution of your screenplay has never
          been easier. Nolan's history tracking feature allows you to navigate
          through the various versions of your script
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F1g5Dz2hiajgCapM2qauHh2&w=384&q=75"
          alt=""
        />
        <p>
          effortlessly. This functionality is invaluable for collaborative
          projects, enabling writers, directors, and producers to review,
          comment on, and even revert to previous versions of the script,
          ensuring that everyone is on the same page throughout the creative
          process.
        </p>
        <h3>Highlighting Text</h3>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F6cwhVWeS88FcOCZJiVQckC&w=384&q=75"
          alt=""
        />
        <p>
          Enhance the clarity and impact of your screenplay with Nolan's text
          highlighting feature. This tool empowers you to draw attention to
          crucial elements within your script, such as key scenes, important
          dialogues, or thematic elements. By visually differentiating these
          elements from the rest of the text, you can effectively communicate
          your creative intentions and ensure they don't go unnoticed.
        </p>
        <h3>Commenting Every Word</h3>
        <p>
          Nolan's commitment to fostering collaboration extends to its in-depth
          commenting feature. With the ability to provide feedback and notes on
          every word in your script, this feature is invaluable for those
          working with a team of writers, editors, or stakeholders. Whether it's
          a suggestion for a specific word choice, a question about character
          development, or an idea for a plot twist, you can keep the lines of
          communication open and ensure that every detail receives the attention
          it deserves.
        </p>
        <h3>Creating and Sorting Scenes</h3>
        <p>
          Crafting a compelling screenplay involves not just writing individual
          scenes but also organizing them in a coherent and engaging manner.
          Nolan simplifies this process by allowing you to effortlessly create,
          sort, and rearrange scenes. This intuitive functionality facilitates
          the development of your story's structure, helping you ensure that the
          narrative flows seamlessly from one scene to the next. Whether you're
          outlining your script from scratch or making adjustments on the fly,
          Nolan empowers you to maintain control over your story's architecture.
        </p>
      </div>
      <FeaturesButton />
    </section>
  );
}

export default IndustryStandardEditor;
