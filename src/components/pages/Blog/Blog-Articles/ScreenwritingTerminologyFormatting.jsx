import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const ScreenwritingTerminologyFormatting = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[19].blog_title}
        article_data={blogData[19].blog_datetime}
      />
      <div className="blog-data-content">
        <p>
          Screenwriting is a unique form of storytelling with its own set of
          terms. Understanding these is crucial for writers and film
          enthusiasts. We'll break down key screenwriting terms, following
          industry standards becomes second nature.{" "}
        </p>
        <p>
          It simplifies navigation and changes in your script, making mastering
          visual storytelling more accessible with this combination of knowledge
          and innovative writing tools.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F3kY0R90aZ0WyzBcFfucKgc&w=384&q=75"
          alt=""
        />
        <p>
          <b>1. Slugline (or Scene Heading):</b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Sets the scene with location and time.
          </li>
          <li>
            <b>Example: </b> INT. LIVING ROOM - NIGHT.
          </li>
        </ul>
        <p>
          2.<b> Action:</b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Describes physical actions, settings, and
            events.
          </li>
          <li>
            <b>Example: </b> John paces nervously, glancing at the clock.
          </li>
        </ul>
        <p>
          3. <b>Character: </b>{" "}
        </p>
        <ul>
          <li>
            <b>Definition: </b> Introduces a character with a name and brief
            description.
          </li>
          <li>
            <b>Example: </b> JOHN, mid-30s, mysterious aura.
          </li>
        </ul>
        <p>
          4. <b>Dialogue: </b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Lines spoken by characters.
          </li>
          <li>
            <b>Example: </b> JOHN: "I can't believe you're here."
          </li>
        </ul>
        <p>
          5. <b>Parenthetical: </b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Additional direction in dialogue.
          </li>
          <li>
            <b>Example: </b> JOHN (whispering): "Let's get out quietly."
          </li>
        </ul>
        <p>
          6. <b>Transition: </b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Indicates scene changes.
          </li>
          <li>
            <b>Example: </b> CUT TO: INT. CAFE - DAY.
          </li>
        </ul>
        <p>
          7. <b>Montage:</b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> A sequence of brief scenes.
          </li>
          <li>
            <b>Example: </b> MONTAGE - John trains, studies, perseveres.
          </li>
        </ul>
        <p>
          8. <b>Flashback/Flashforward: </b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Disrupts chronological order.
          </li>
          <li>
            <b>Example: </b> INT. JOHN'S CHILDHOOD BEDROOM - NIGHT (FLASHBACK).
          </li>
        </ul>
        <p>
          9. <b>Voiceover (V.O.) / Off-Screen (O.S.): </b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Narration or dialogue not on-screen.
          </li>
          <li>
            <b>Example: </b> JOHN (V.O.): "It all started on a rainy night..."
          </li>
        </ul>
        <p>
          10. <b>Inciting Incident: </b>
        </p>
        <ul>
          <li>
            <b>Definition: </b> Sparks the protagonist's journey.
          </li>
          <li>
            <b>Example: </b>John finds a mysterious letter.
          </li>
        </ul>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2FulwUXFOoKm5bqFwfg8Rv6&w=384&q=75"
          alt=""
        />
        <p>
          Understanding these terms is key to screenwriting. With the{" "}
          <a href="/features/the-industry-standard-editor">
            <b>NolanAI: Free Script Writing Software</b>
          </a>
          and Editor, following industry standards becomes second nature,
          simplifying navigation and changes in your script,
          <a href="/features/smart-formatting">
            <b>
              with the helping of AI guiding and suggesting how to enhance
              formatting
            </b>
          </a>
          . Mastering visual storytelling is more accessible with this
          combination of knowledge and innovative writing tools.
        </p>
      </div>
      <BlogButton />
    </section>
  );
};

export default ScreenwritingTerminologyFormatting;
