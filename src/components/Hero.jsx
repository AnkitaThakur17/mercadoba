import React from "react";
import { useForm } from "react-hook-form";

const Hero = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" , reValidateMode: "onChange" ,
    defaultValues: {
    email: "ankita@gmail.com",
    gender: "female",
    phone: "9876543210"
  }});

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

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

        <form className="hero-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login your account...</h2>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.endsWith("@gmail.com") || "Only Gmail is allowed",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            onBlur={(e) =>
              console.log("User left email field:", e.target.value)
            }
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}

          <label>Gender Selection</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              maxLength: {
                value: 16,
                message: "Password must not exceed 16 characters",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message:
                  "Password must contain at least one digit and one special character",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          
          <label>Phone number</label>
          <input
            type="text"
            placeholder="Enter phone number"
            {...register("phone", { required: "Phone number is required",
              message:"phone number is required",
                minLength: {
                value: 10,
                message: "Phone must be 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Phone must not exceed 10 characters",
              },
             })}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
          />
           {errors.phone && (
            <p style={{color:"red"}}>{errors.phone?.message}</p>
           )}

          {Object.values(errors).length > 0 && (
            <ul style={{ color: "red" }}>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          )}

          <a href="" className="forgot-password">
            Forgot Password?
          </a>
          <button className="login-btn">Login</button>

          <p>Or login with</p>
          <button className="google-signin-btn">
            <img style={{ width: 50 }} src="/google1.png" alt="Google Logo" />
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
