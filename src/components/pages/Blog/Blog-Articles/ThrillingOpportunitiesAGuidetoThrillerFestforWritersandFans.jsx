import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const ThrillingOpportunitiesAGuidetoThrillerFestforWritersandFans = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[45].blog_title}
        article_data={blogData[45].blog_datetime}
      />
      <div className="blog-data-content">
        <p>
          Are you a writer or fan of the thriller genre looking for an exciting
          conference to attend? Look no further than ThrillerFest! As a
          conference held annually in New York City, ThrillerFest offers a
          variety of workshops, panels, and events for all levels of experience.
        </p>
        <p>
          One of the most popular components of ThrillerFest is the Master
          CraftFest, where you have the opportunity to learn from some of the
          most respected and accomplished writers in the genre. These intensive
          workshops allow you to focus on refining your craft and learning more
          about the art of writing a captivating thriller.
        </p>
        <p>
          Another highlight of ThrillerFest is the PitchFest, which provides an
          excellent opportunity for writers to{" "}
          <a href="/features/nolanai-deck-builder">
            pitch
          </a>{" "}
          their manuscripts directly to agents and publishers. With only three
          minutes to make your pitch, you'll need to bring your A-game, but if
          an agent or publisher is interested, they may request a full
          manuscript.
        </p>
        <p>
          ThrillerFest also offers a diverse range of panels and workshops on a
          variety of topics, including the business of writing, the art of
          storytelling, and the importance of suspense. Attendees have the
          chance to learn from some of the best writers in the industry and gain
          valuable insights into what makes a successful thriller. But
          ThrillerFest isn't just about professional development. The conference
          also offers a variety of social events, including cocktail parties,
          author signings, and a banquet, allowing you to connect with fellow
          writers and fans in a fun and relaxed setting.
        </p>
        <p>
          In conclusion, ThrillerFest is an exceptional conference for anyone
          interested in the thriller genre. Whether you're a writer looking to
          improve your craft, a fan of the genre, or just looking for a fun and
          engaging conference experience, ThrillerFest is not to be missed.
          <a href="https://thrillerfest.com/"> Register here.</a>
        </p>
      </div>
      <BlogButton />
    </section>
  );
};

export default ThrillingOpportunitiesAGuidetoThrillerFestforWritersandFans;
