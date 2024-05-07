import React from "react";
import { useForm } from "react-hook-form";
import "./registration-form-style.css";

export default function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className='form-input'
        type='text'
        placeholder='First name'
        {...register("FirstName", { required: true, maxLength: 80 })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role='alert'>First name is required</p>
      )}
      <input
        className='form-input'
        type='text'
        placeholder='Last name'
        {...register("LastName", { required: true, maxLength: 100 })}
        aria-invalid={errors.LastName ? "true" : "false"}
      />
      {errors.LastName?.type === "required" && (
        <p role='alert'>Last Name is required</p>
      )}
      <input
        className='form-input'
        type='text'
        placeholder='Email'
        {...register("Email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        aria-invalid={errors.Email ? "true" : "false"}
      />
      {errors.mail && <p role='alert'>"Email Address is required"</p>}
      <input
        className='form-input'
        type='tel'
        placeholder='Mobile number'
        {...register("MobileNumber", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
        aria-invalid={errors.MobileNumber ? "true" : "false"}
      />
      {errors.MobileNumber && (
        <p role='alert'>"Mobile Number Address is required"</p>
      )}
      <select {...register("Title", { required: true })}>
        <option value='Mr'>Mr</option>
        <option value='Mrs'>Mrs</option>
        <option value='Miss'>Miss</option>
        <option value='Dr'>Dr</option>
      </select>

      <input
        className='form-input'
        type='password'
        placeholder='password'
        {...register("password", {
          required: true,
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: 100,
          pattern: {
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            message:
              "Password must include uppercase, lowercase, number, and special character",
          },
        })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.MobileNumber && <p role='alert'>{errors.password.message}</p>}
      <input
        className='form-input'
        type='password'
        placeholder='PasswordConfirmation'
        {...register("PasswordConfirmation", {
          required: true,
          maxLength: 100,
          validate: (value) =>
            value === password || "The passwords do not match",
        })}
      />

      <input type='submit' />
    </form>
  );
}
