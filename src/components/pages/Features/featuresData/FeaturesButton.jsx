import { Link } from "react-router-dom";

const FeaturesButton = () => {
  return (
    <Link to="/login">
      <button type="button" class="feature-data-btn">
        <div class="feature-data-btn-text">Get NolanAI FREE</div>
      </button>
    </Link>
  );
};

export default FeaturesButton;
