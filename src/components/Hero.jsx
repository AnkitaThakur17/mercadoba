import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-left">
          <img
            src="/sellerUser.webp"
            alt="Seller Icon"
            className="seller-icon"
          />
          <h2>Want to become a seller?</h2>
          <button className="seller-signup-btn">Seller Signup</button>
        </div>

        <form className="hero-form">
          <h2>Login your account...</h2>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <a href="" className="forgot-password">
            Forgot Password?
          </a>
          <button className="login-btn">Login</button>

          <p>Or login with</p>
          <button className="google-signin-btn">
            <img style={{width:50}}
              src="/google1.png"
              alt="Google Logo"
            />
            Sign in with Google
          </button>

          <p className="signup-text">
            You don't have an account? <a href="">Sign Up</a>
          </p>
        </form>
      </section>
    </>
  );
};

export default Hero;
