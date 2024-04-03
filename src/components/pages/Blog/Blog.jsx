import React from "react";
import blogData from "../../Data/blogData";
import "./blog.css";

function Blog() {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="blog">
      <div className="blog-bg-titles">
        <div className="blog-bg-img">
          <img
            src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-landing-main%20copy.webp&w=1200&q=75"
            alt=""
          />
          <div className="blog-titles">
            <div className="blog-title">NolanAI Blog</div>
            <div className="blog-title-dec">
              Unlocking the secrets of successful screenwriting
            </div>
          </div>
        </div>
      </div>
      <div className="blog-contents">
        {blogData.map((blog) => {
          return (
            <div key={blog.id} className="blog-content">
              <div>
                <div className="blog-content-img">
                  <img src={blog.blog_img} alt="blog-img" />
                </div>
                <div className="blog-article-data">
                  <p className="blog-date">{blog.blog_datetime}</p>
                  <h2 className="blog-article-title">{blog.blog_title}</h2>
                  <p className="blog-article-para">{blog.blog_para}</p>
                </div>
              </div>
              <div className="blog-article-link">
                <a onClick={toTop} href={blog.blog_article_link}>Read article</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
