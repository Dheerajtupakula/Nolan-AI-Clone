import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const MasteringSceneManagementinNolanYourComprehensiveGuide = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[33].blog_title}
        article_data={blogData[33].blog_datetime}
      />
      <div className="blog-data-content">
        <p>
          We understand that crafting the perfect scene is essential to your
          storytelling journey. That's why we've developed a tool that puts the
          reins firmly in your hands. Our Scene Editing Powerhouse empowers you
          to:
        </p>
        <p>
          <b>1. Edit Within the Scene:</b>&nbsp;Make real-time adjustments
          without switching screens. Tweak dialogue, enhance descriptions, and
          refine details seamlessly.
        </p>
        <p>
          <b>2. Effortless Deletion:</b>&nbsp;Bid farewell to scenes that no
          longer serve your narrative. With a simple click, you can swiftly
          delete scenes that need a graceful exit.
        </p>
        <p>
          <b>3. Condense for Impact:</b>&nbsp;Want to tighten your narrative?
          Our tool lets you effortlessly shorten scenes while maintaining their
          essence, ensuring your story remains engaging and impactful.
        </p>
      </div>
      <BlogButton />
    </section>
  );
};

export default MasteringSceneManagementinNolanYourComprehensiveGuide;
