import React from "react";
import "../blog-data.css";
import BlogBackgroundImgTitle from "./BlogBackgroundImgTitle";
import blogData from "../../../Data/blogData";
import BlogButton from "./BlogButton";

function UnveilingtheMostWantedMoviesof2024() {
  return (
    <section className="blog-data">
      {" "}
      <BlogBackgroundImgTitle
        article_title={blogData[10].blog_title}
        article_data={blogData[10].blog_datetime}
      />
      <div className="blog-data-content">
          <p>
            Despite the numerous challenges Hollywood faced in 2023, it appears
            that the industry has successfully overcome those obstacles. As we
            enter 2024, the difficulties of the past year are now in the
            rearview mirror, paving the way for a renewed sense of excitement.
            Anticipation is mounting for the upcoming release of exhilarating
            superhero films, a long-awaited musical adaptation, the return of
            George Miller to the Mad Max series, the third installment of
            Avatar, and a plethora of other captivating projects. Take a look at
            the list below to catch a glimpse of the most eagerly awaited movies
            of 2024, and stay tuned for updates as we continually add more to
            the lineup!
          </p>
          <p>
            1.{" "}
            <a href="https://www.rottentomatoes.com/m/argylle">
              <b>Argylle</b>
            </a>
            <b>&nbsp;(2024)</b>
          </p>
          <p>
            Director<b> </b>Matthew Vaughn brought back a fancy spies story back
            to screen. A novelist (Bryce Dallas Howard). She becomes the focus
            of an underground criminal organization as the storylines of her
            espionage novels eerily parallel their operations. An undercover spy
            (Sam Rockwell) takes on the task of rescuing her and her feline
            companion.
          </p>
          <p>
            Watch trailer{" "}
            <a href="https://www.youtube.com/watch?v=7mgu9mNZ8Hk">here</a>.
          </p>
          <p>
            2.&nbsp;
            <a href="https://www.imdb.com/title/tt15239678/?ref_=ttls_li_tt">
              Dune: Part Two
            </a>
            &nbsp;(2024) In the second installment, notable figures such as
            Florence Pugh, Léa Seydoux, Austin Butler, and Christopher Walken
            join the ensemble as Villeneuve brings to life the latter portion of
            Frank Herbert's expansive science fiction novel.
          </p>
          <p>
            Watch trailer{" "}
            <a href="https://www.youtube.com/watch?v=U2Qp5pL3ovA">here.</a>
          </p>
          <p>
            3.{" "}
            <a href="https://www.rottentomatoes.com/m/arthur_the_king">
              <b>Arthur the King</b>
            </a>
            <b>&nbsp;(2024)</b>
          </p>
          <p>
            A remarkable narrative inspired by true events unfolds as a man
            forms a friendship with a stray dog while undertaking the challenge
            to conquer the Adventure Racing World Championship, a grueling
            435-mile endurance race set in the treacherous landscapes of the
            Dominican Republic.
          </p>
          <p>
            Watch trailer{" "}
            <a href="https://www.youtube.com/watch?v=wjDJNEPghNY">here.</a>
          </p>
          <p>
            4.{" "}
            <a href="https://www.rottentomatoes.com/m/ghostbusters_frozen_empire">
              <b>Ghostbusters: Frozen Empire</b>
            </a>
            <b>&nbsp;(2024)</b>
          </p>
          <p>
            Yes, Ghostbusters are back! When the unearthing of an ancient
            artifact releases a malevolent force, Ghostbusters both old and new
            must unite to safeguard their homeland and prevent the world from
            plunging into a second ice age.
          </p>
          <p>
            Watch trailer{" "}
            <a href="https://www.youtube.com/watch?v=JH7aULttgZ0">here</a>
          </p>
          <p>
            5.{" "}
            <a href="https://www.rottentomatoes.com/m/the_fall_guy_2024">
              <b>The Fall Guy</b>
            </a>
            <b>&nbsp;(2024)</b>
          </p>
          <p>
            As an action movie's filming for a stuntman transforms into reality,
            David Leitch is tackling a film adaptation of an ‘80s TV show about
            a stuntman who moonlights as a bounty hunter.
          </p>
          <p>
            Watch trailer{" "}
            <a href="https://www.youtube.com/watch?v=j7jPnwVGdZ8">here</a>
          </p>
          <p>
            6.{" "}
            <a href="https://www.rottentomatoes.com/m/furiosa_a_mad_max_saga">
              <b>Furiosa: A Mad Max Saga</b>
            </a>
            <b>&nbsp;(2024)</b>
          </p>
          <p>
            Adding the cherry on the pie is Furiosa: A Mad Max Saga! Anya
            Taylor-Joy is set to portray a youthful iteration of Imperator
            Furiosa, the formidable driver of the war rig, in the prequel to the
            highly acclaimed Mad Max: Fury Road—one of the standout films of the
            century thus far. George Miller, naturally, resumes his directorial
            role, and Chris Hemsworth joins the cast in this film that delves
            into Furiosa's abduction and her ascent within Immortan Joe's
            hierarchy.
          </p>
          <p>
            Watch trailer{" "}
            <a href="https://www.youtube.com/watch?v=XJMuhwVlca4">here</a>
          </p>
          <p>
            Watch out blog later to discuss the script and plot hole and other
            details for these iconic movies!
          </p>
          <p>
            Photo and full article by{" "}
            <a href="https://editorial.rottentomatoes.com/article/most-anticipated-movies-of-2024/">
              editorial.rottentomatoes.com
            </a>
          </p>
    
      </div>
      <BlogButton />
    </section>
  );
}

export default UnveilingtheMostWantedMoviesof2024;
