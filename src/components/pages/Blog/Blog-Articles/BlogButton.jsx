import React from "react";
import { Link } from "react-router-dom";

function BlogButton() {
  const toTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     })}
  return (
    <Link to="/login" onClick={toTop}>
      <button type="button" className="feature-data-btn">
        <div className="feature-data-btn-text">Get NolanAI FREE</div>
      </button>
    </Link>
  );
}

export default BlogButton;
