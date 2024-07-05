import { Link } from "react-router-dom";

const FeaturesButton = () => {
  return (
    <Link to="/login">
      <button type="button" className="feature-data-btn">
        <div className="feature-data-btn-text">Get NolanAI FREE</div>
      </button>
    </Link>
  );
};

export default FeaturesButton;
