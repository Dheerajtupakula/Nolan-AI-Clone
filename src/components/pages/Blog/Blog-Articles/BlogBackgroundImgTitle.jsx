import React from "react";

function BlogBackgroundImgTitle({ article_title ,article_data }) {
  return (
      <div className="blog-bgc-title">
        <div className="blog-bgc">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-blog1.webp&w=1920&q=75"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="blog-titles">
          <h6 className="blog-currentpage">
            <a href="/">NOLAN//</a> <a href="/blog">BLOG//</a>
            <span>
              <i>ARTICLE</i>
            </span>
          </h6>
          <h1 className="blog-title">
            <div className="blog-title-text">{article_title}</div>
          </h1>
          <div className="blog-uploaded">
            <p>{article_data}</p>
            <a
              aria-label="twitter"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/nolanaiapp"
            >
              Follow <strong>@nolanaiapp</strong>
            </a>
          </div>
        </div>
      </div>
  );
}

export default BlogBackgroundImgTitle;
