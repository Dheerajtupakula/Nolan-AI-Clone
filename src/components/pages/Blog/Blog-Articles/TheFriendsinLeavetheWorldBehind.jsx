import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

const TheFriendsinLeavetheWorldBehind = () => {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[14].blog_title}
        article_data={blogData[14].blog_datetime}
      />
      <div className="blog-data-content">
        <p>
          So, in the Netflix movie "Leave the World Behind" with Julia Roberts,
          there's this cool subplot about Friends. Picture this: Rose is
          binge-watching Friends when all of a sudden, the internet goes bonkers
          with an apocalyptic vibe. Crazy, right? Well, she ends up seeking
          refuge in her neighbor's doomsday bunker. Meanwhile, bombs are raining
          down on Manhattan, and an emergency alert spills the beans about rogue
          armed forces going wild on the White House and big cities.
        </p>
        <p>
          But here's the twist. In the midst of all this chaos, Rose finds her
          happy place – a bookshelf loaded with all the seasons of Friends. It's
          like her own little escape from the craziness around her. The
          director, Esmail, says, "When things get nuts and we're feeling all
          alone, we crave some comfort. And for Rose, I figured her journey
          wouldn't be complete until she saw the final episode of her favorite
          show."
        </p>
        <p>
          Now, the ending of this Friends subplot isn't all rainbows and
          butterflies. It's more like finding specks of hope in the dark. Esmail
          points to this deep painting in the movie that says, "Hope begins in
          the dark." He's basically saying that "Leave the World Behind" is a
          heads-up kind of movie – it warns you without spelling out all the
          answers. It wants you to get that even in the craziest times, hope is
          hanging around. And hey, maybe there's a metaphorical DVD box set
          waiting to bring some comfort, even if everything else seems to be
          falling apart. Cool, huh?
        </p>
        <p></p>
        <p>
          Original article and image credit:{" "}
          <a href="https://www.netflix.com/tudum/articles/leave-the-world-behind-ending-explained">
            <b>Netflix</b>
          </a>
        </p>
        <p></p>
      </div>
      <BlogButton />
    </section>
  );
};

export default TheFriendsinLeavetheWorldBehind;
