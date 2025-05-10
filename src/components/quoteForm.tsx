import React, { useState, type FormEvent } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import "../styles/form.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// *
// TODO
// styling
// types
// default values for the select components - would it be an enum, how to type in zod?
// what validations are required, max characters?
// **/

const schema = z.object({
  name: z.string({
    message: "Name is required",
  }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z.number({ message: "Phone number is required" }),
  street: z.string({ message: "Street Address is required" }),
  suburb: z.string({ message: "Please select a suburb" }),
  service: z.string({ message: "Please select a service" }),
  comments: z.string().max(256),
});

type Service = {
  // create enum for select options
};

type FormInputs = z.infer<typeof schema>;

export const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: undefined,
      street: "",
      suburb: "",
      service: "",
      comments: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log({ data });

  // handleSubmit - will preventDefault behaviour of the form
  // and will validate the inputs, once they are valid it submits them

  /**astro example
   * Create a function that accepts a submit event, then pass it as a submit handler to your form.
   * In the function:
   * Call preventDefault() on the event to override the browser’s default submission process.
   * Create a FormData object and send it in a POST request to your endpoint using fetch().
   *   
   * 
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
   */
  console.log({ errors });

  return (
    <div className="form-wrapper">
      <div className="image-wrapper">
        <div className="image"></div>
        <h1 className="title">request a quote</h1>
      </div>
      <h2 className="info">
        Please complete the form below for an accurate quote
      </h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-element">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            placeholder="Your name"
            className="input"
            type="text"
            {...register("name")}
          />
        </div>
        {errors.name ? (
          <div style={{ color: "red" }}>{errors.name.message}</div>
        ) : null}
        <div className="form-element">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="Your email"
            className="input"
            type="text"
            {...register("email")}
          />
        </div>

        <div className="form-element">
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            placeholder="Your phone number"
            className="input"
            type="tel"
            {...register("phone")}
          />
        </div>

        <div className="form-element">
          <label className="label" htmlFor="street">
            Street
          </label>
          <input
            id="street"
            placeholder="Your address"
            className="input"
            type="text"
            {...register("street")}
          />
        </div>

        <div className="form-element">
          <label className="label" htmlFor="suburb">
            Suburb
          </label>
          <select id="suburb" className="input" {...register("suburb")}>
            <option value="">Select...</option>
            <option value="suburb1">suburb 1</option>
            <option value="suburb2">suburb 2</option>
            <option value="suburb3">suburb 3</option>
          </select>
        </div>

        <div className="form-element">
          <label className="label" htmlFor="service">
            Service
          </label>
          <select id="service" className="input" {...register("service")}>
            <option value="">Select...</option>
            <option value="drilling">drilling a new bore</option>
            <option value="cleaning">cleaning an existing bore</option>
            <option value="repair">pump supply/repair</option>
          </select>
        </div>

        <div className="form-element">
          <label className="label" htmlFor="comments">
            Comments
          </label>
          <textarea
            className="input"
            id="comments"
            placeholder="Any additional information you want us to know"
          ></textarea>
        </div>

        <div className="button-wrapper">
          <input className="button" type="submit" />
        </div>
      </form>
    </div>
  );
};
