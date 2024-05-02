import "./sharedscript.css"
const SharedScripts = () => {
  return (
    <div className="sharedscripts">
      <div className="sharedscripts-icon">
        <svg
          width="48"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 12H24l-4-4H8c-2.2 0-3.98 1.8-3.98 4L4 36c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4zm0 24H8V12h10.34l4 4H40v20zm-21.18-7.16L22 25.68V34h4v-8.32l3.18 3.18L32 26.02 24.02 18 16 26.02l2.82 2.82z"
            fill="#1D6EE3"
          ></path>
        </svg>
      </div>
      <h4 id="sharedscripts-title">Invite Co-Authors</h4>
      <p id="sharedscripts-dec">
        Now you can invite colleagues and collaborate with them on a script in
        real time!
      </p>
    </div>
  );
};

export default SharedScripts;
