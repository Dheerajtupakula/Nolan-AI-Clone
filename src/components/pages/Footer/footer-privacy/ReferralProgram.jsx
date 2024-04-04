import React from "react";
import "../footer-privacy.css";

const ReferralProgram = () => {
  return (
    <section className="footer-privacy">
      <div className="footer-privacy-titles">
        <h6 className="footer-privacy-currentpage">
          NOLAN// <span> REFERRAL</span>
        </h6>
        <h1 className="footer-privacy-title">Referral Program</h1>
      </div>
      <div className="footer-privacy-content Referral">
        <h3>Join Our Referral Program!&nbsp;</h3>
        <p>
          Hey, content creators and scriptwriters!&nbsp; Are you a fan of
          NolanAI's content wizardry? Here's your chance to spread the magic and
          earn while you do it. Join our Referral Program and invite your
          creative friends to the NolanAI family. For every friend who signs up
          for a paid subscription, you'll earn a cool 5% cashback!&nbsp; The
          best part? There are NO limits on how many friends you can invite.
          Share the word, share the love, and watch your earnings grow!&nbsp;
        </p>
        <h3>How it works!</h3>
        <ul>
          <li>
            <p>
              Sign Up with NolanAI: Begin by creating your account on NolanAI
            </p>
          </li>
          <li>
            <p>
              Access the Affiliate Program: Once your account is set up, go to
              your profile, and click on "Join the Affiliate Program" at this{" "}
              <a href="/">link</a>
            </p>
          </li>
          <li>
            <p>Generate Your Unique Affiliate Code</p>
          </li>
          <li>
            <p>
              Share and Earn: Start sharing your unique code to earn cashback
              and enjoy the benefits of being a NolanAI affiliate.
            </p>
          </li>
        </ul>
        <p>
          Ready to start? Visit our website to become a NolanAI Affiliate today!
          Let's script success together.&nbsp;&nbsp;#AffiliateProgram #NolanAI
          #EarnWithFriends
        </p>
      </div>
      <a href="/login">
        <button type="button" className="referral-login-btn">
          <div className="referral-login-btn-text">Sign Up</div>
        </button>
      </a>
    </section>
  );
};

export default ReferralProgram;
