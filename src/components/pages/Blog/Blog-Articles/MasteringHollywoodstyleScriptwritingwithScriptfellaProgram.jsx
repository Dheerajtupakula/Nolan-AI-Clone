import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const MasteringHollywoodstyleScriptwritingwithScriptfellaProgram = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[42].blog_title}
        article_data={blogData[42].blog_datetime}
      />
      <div className="blog-data-content">
          <p>
            Attention all aspiring screenwriters! Are you ready to take your
            storytelling skills to the next level and make your script
            Hollywood-worthy? Join{" "}
            <a href="https://courses.scriptfella.com/courses/the-scriptfella-program">
              The Scriptfella Program's
            </a>{" "}
            upcoming scriptwriting class taught by Dominic Morgan, a seasoned
            screenwriter with over two decades of experience in London and
            Hollywood. He's worked on films like "Gladiator" and "The Last
            Samurai," as well as popular TV shows like "Downton Abbey" and
            "Doctor Who." In this class, you'll learn the art of crafting
            compelling stories that captivate audiences and get your foot in the
            door of the entertainment industry. Don't miss out on this
            incredible opportunity to enhance your scriptwriting skills and
            bring your stories to life on the big screen!{" "}
          </p>
          <p>
            <a href="https://courses.scriptfella.com/courses/the-scriptfella-program">
              Get your spot today!
            </a>
          </p>
          <p>
            #Hollywood #scriptwritingclass #TheScriptfellaProgram #DominicMorgan
            #blockbusterscripts #writingtips #creativewriting
          </p>
    
      </div>
      <BlogButton />
    </section>
  );
};

export default MasteringHollywoodstyleScriptwritingwithScriptfellaProgram;
