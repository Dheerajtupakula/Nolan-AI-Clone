import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const CollaborativeScriptwritingUnveilingRealTimeFeedbackSharing = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[34].blog_title}
        article_data={blogData[34].blog_datetime}
      />
      <div className="blog-data-content">
        <p>
          In the realm of scriptwriting, a groundbreaking feature is changing
          the game. Imagine effortlessly sharing your script with a friend for
          review, inviting them to leave comments and provide real-time
          feedback. Gone are the days of solitary creation – now, collaboration
          fuels your narrative evolution.
        </p>
        <ul>
          <li>
            <p>
              <b>Streamlined Sharing</b>: Share your script with a single click,
              transcending geographical barriers for global collaboration.
            </p>
          </li>
          <li>
            <p>
              <b>Interactive Comments</b>: Friends can leave comments directly
              on your script, enhancing plot, character, and narrative.
            </p>
          </li>
          <li>
            <p>
              <b>Amplified Feedback</b>: Transform your script into a focus
              group, refining every aspect with trusted insights.
            </p>
          </li>
        </ul>
        <p>
          Embrace the future of scriptwriting, where the power of partnership
          takes your storytelling to new heights. Your script isn't just words;
          it's a shared masterpiece, shaped by the symphony of collaborative
          creativity. Elevate your scriptwriting today.
        </p>
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fapi%2Fblog%2Fimages%2F5PuwKKcSv2GLuKlgyKmhAj&w=384&q=75"
          alt=""
        />
        <p></p>
        <p></p>
      </div>
      <BlogButton />
    </section>
  );
};

export default CollaborativeScriptwritingUnveilingRealTimeFeedbackSharing;
