import React from "react";
import { useForm } from "react-hook-form";

const Combo = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-container">
      <form className="hero-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Enter your name</h2>

        <input
          {...register("name", {
            required: "Name is required!",
            minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
          },
          })}
          placeholder="Enter name"
        />

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
          type="email"
          placeholder="Enter email"
        />
        <input
          {...register("password", {
            required: "password is required",
          })}
          placeholder="Enter password"
        />

        <input
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        {errors.confirmPassword && (
        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Combo;
