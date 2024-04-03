import React from "react";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

function WomensImpactBehindTheScenesTheFilmIndustry() {
  return (
    <section className="blog-data" style={{ color: "white" }}>
      {" "}
      <BlogBackgroundImgTitle article_title={blogData[2].blog_title} article_data={blogData[2].blog_datetime} />
      <div className="blog-data-content">
        <p>
          Lights, camera, action – and enter a league of extraordinary women
          rewriting the script behind the scenes in Hollywood. No, we're not
          talking about the leading ladies on the screen, but the brilliant
          minds shaping narratives, calling the shots, and breaking down
          barriers in the film industry.
        </p>
        <h3>Women Writers:</h3>
        <p>
          <b>1. Greta Gerwig: </b> Known for her work as a writer and director,
          Gerwig has brought her unique voice to films like "Lady Bird" and
          "Little Women," exploring coming-of-age narratives with depth and
          authenticity.
        </p>
        <p>
          <b>2. Phoebe Waller-Bridge: </b> Renowned for her exceptional writing
          skills, Waller-Bridge created and wrote the critically acclaimed
          series "Fleabag," showcasing her ability to infuse humor and depth
          into complex characters.
        </p>
        <h3>Women Producers:</h3>
        <p>
          <b>1. Kathleen Kennedy: </b> As the president of Lucasfilm, Kathleen
          Kennedy has been a driving force behind the "Star Wars" franchise and
          has produced numerous blockbuster films, demonstrating leadership and
          a keen eye for compelling storytelling.
        </p>
        <p>
          <b>2. Nina Jacobson: </b> Founder of Color Force production company,
          Jacobson produced the highly successful "Hunger Games" series and has
          been a vocal advocate for diversity and inclusivity in the industry.
        </p>
        <h3>Women Directors:</h3>
        <p>
          <b>1. Ava DuVernay: </b> DuVernay has made history as the first Black
          woman to receive a Golden Globe nomination for Best Director for her
          work on "Selma." She continues to champion diversity and tell
          impactful stories.
        </p>
        <p>
          <b>2. Chloé Zhao: </b> Zhao made history by becoming the first woman
          of color to win the Academy Award for Best Director for her film
          "Nomadland," showcasing her unique storytelling and visual style.
        </p>
        <h3>Women Cinematographers:</h3>
        <p>
          <b>1. Rachel Morrison: </b> Morrison made history as the first woman
          to be nominated for an Academy Award for Best Cinematography for her
          work on "Mudbound." She continues to break barriers in the field.
        </p>
        <h3>Women Editors:</h3>
        <p>
          <b>1. Thelma Schoonmaker: </b> As a longtime collaborator with Martin
          Scorsese, Schoonmaker has edited numerous iconic films, including
          "Goodfellas" and "The Departed," earning her multiple Academy Awards.
        </p>
        <p>
          <b>2. Margaret Sixel: </b> Sixel's editing work on "Mad Max: Fury
          Road" earned her an Academy Award, showcasing her ability to create
          thrilling and visually stunning narratives.
        </p>
        <p>
          These women, among many others, have made indelible marks on the film
          industry, contributing to its richness and diversity behind the
          scenes.
        </p>
      </div>
      <BlogButton />
    </section>
  );
}

export default WomensImpactBehindTheScenesTheFilmIndustry;
