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
				className="form-input"
				type="text"
				placeholder="First name"
				{...register("First name", { required: true, maxLength: 80 })}
			/>
			<input
				className="form-input"
				type="text"
				placeholder="Last name"
				{...register("Last name", { required: true, maxLength: 100 })}
			/>
			<input
				className="form-input"
				type="text"
				placeholder="Email"
				{...register("Email", {
					required: true,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<input
				className="form-input"
				type="tel"
				placeholder="Mobile number"
				{...register("Mobile number", {
					required: true,
					minLength: 6,
					maxLength: 12,
				})}
			/>
			<select {...register("Title", { required: true })}>
				<option value="Mr">Mr</option>
				<option value="Mrs">Mrs</option>
				<option value="Miss">Miss</option>
				<option value="Dr">Dr</option>
			</select>

			<input
				{...register("Developer", { required: true })}
				type="radio"
				value="Yes"
				className="form-radio-input"
			/>
			<input
				{...register("Developer", { required: true })}
				type="radio"
				value="No"
				className="form-radio-input"
			/>

			<input type="submit" />
		</form>
	);
}
