import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const Combo = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({defaultValues: { hobbies: [{ name: '' }] }});

    const { fields, append, remove } = useFieldArray({
    control,
    name: 'hobbies'
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-container">
      <form className="hero-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Enter your name</h2>

        <input
          {...register("Firstname", {
            required: "Firstname is required!",
            minLength: {
              value: 3,
              message: "first name must be at least 3 characters long",
            },
            maxLength:{
              value: 8,
              message: "first name could have maximum 8 characters only."
            }
          })}
          placeholder="Enter first name"
        />
          {errors.Firstname && <p style={{ color: "red" }}>{errors.Firstname.message}</p>}
        <input
          {...register("Lastname", {
            required: "Lastname is required!",
            minLength: {
              value: 3,
              message: "Last name must be atleast 3 characters long",
            },
            maxLength:{
              value: 8,
              message: "Last name could have maximum 8 charaters only"
            }
          })}
          placeholder="Enter last name"
        />
        {errors.Lastname && <p style={{color:"red"}}> {errors.Lastname.message} </p>}
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
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <h3>Select Gender</h3>
        <label>
          <input
            type="radio"
            value="Male"
            {...register('gender', { required: 'Gender is required' })}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            {...register('gender', { required: 'Gender is required' })}
          />
          Female
        </label>

        {fields.map((field, index) => (
        <div key={field.id}>
          <input 
            {...register(`hobbies.${index}.name`, { required: 'Hobby name required' })}
            placeholder={`Hobby ${index + 1}`}
          />
          <button style={{marginLeft:20}} type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}

        <input type="tel"
        {
          ...register("phone",{
            required: "phone number is required",
            pattern: {
            
            message: "Phone number must be exactly 10 digits"
          }

          })
         }placeholder="Enter phone number"
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
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}
       {errors.phone && <p style={{color:"red"}}> {errors.phone.message} </p>}
        {/* Display all errors in a list */}
        {Object.values(errors).length > 0 && (
          <ul style={{ color: "red" }}>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        )}
        <button style={{marginTop:10}}type="button" onClick={() => append({ name: '' })}>Add Hobby</button>
        <button style={{marginTop:20}} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Combo;
