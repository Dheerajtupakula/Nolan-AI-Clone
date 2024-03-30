import React from "react";
import "./login.css";

function Login() {
  return (
    <section className="login-page">
      {/* <div className="login-bgc">
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fhero-img-login%20copy.webp&w=1200&q=75"
          alt=""
        />
      </div> */}
      <div className="login-flex">
        <h1 className="login-title">Unlock the full NOLAN Experience</h1>
        <div className="login">
          <h1>LOG IN</h1>
          <div className="login-content">
            <button className="login-btn">
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.805 10.041H21V10h-9v4h5.651A5.998 5.998 0 016 12a6 6 0 016-6c1.53 0 2.921.577 3.98 1.52L18.81 4.69A9.954 9.954 0 0012 2C6.478 2 2 6.478 2 12c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-.67-.069-1.325-.195-1.959z"
                    fill="#FFC107"
                  ></path>
                  <path
                    d="M3.153 7.346l3.285 2.409A5.997 5.997 0 0112 6c1.53 0 2.921.577 3.98 1.52L18.81 4.69A9.954 9.954 0 0012 2a9.994 9.994 0 00-8.847 5.346z"
                    fill="#FF3D00"
                  ></path>
                  <path
                    d="M12 22c2.583 0 4.93-.988 6.704-2.596l-3.095-2.619A5.955 5.955 0 0112 18a5.997 5.997 0 01-5.641-3.973L3.098 16.54C4.753 19.777 8.114 22 12 22z"
                    fill="#4CAF50"
                  ></path>
                  <path
                    d="M21.805 10.041H21V10h-9v4h5.651a6.02 6.02 0 01-2.043 2.785h.002l3.095 2.619C18.485 19.602 22 17 22 12c0-.67-.069-1.325-.195-1.959z"
                    fill="#1976D2"
                  ></path>
                </svg>
              </div>
              <div className="btn">Continue with Google</div>
              <div></div>
            </button>
            <button className="login-btn">
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19z"
                    fill="#039BE5"
                  ></path>
                  <path
                    d="M13.286 14.518h2.459l.386-2.498h-2.845v-1.364c0-1.038.338-1.958 1.309-1.958h1.56v-2.18c-.275-.037-.854-.117-1.949-.117-2.287 0-3.627 1.207-3.627 3.958v1.662h-2.35v2.497h2.35v6.864c.465.07.937.118 1.421.118.438 0 .864-.04 1.286-.097v-6.885z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
              <div className="btn">Continue with Facebook</div>
              <div></div>
            </button>
            <button className="login-btn">
              <div>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
                    fill="#1A1D24"
                    fill-opacity="0.96"
                  ></path>
                </svg>
              </div>
              <div className="btn">Continue with Email</div>
              <div></div>
            </button>
            <button className="login-btn btn-forgot">
              <div className="btn btnForgot">Forgot Password?</div>
            </button>
          </div>
          <div className="login-terms">
            <p>
              By signing up, you agree to the <span>Terms of Service</span> and
              <span> Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
