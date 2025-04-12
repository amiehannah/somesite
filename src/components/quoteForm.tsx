import React, { useState, type FormEvent } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "../styles/form.css";

// *
// TODO
// use zod for schema
// styling
// types
// default values for the select components
// **/

type Service = {
  // create enum for select options
};
// todo - sort out type declaration
type FormInputs = {
  name: string;
  email: string;
  phone: string;
  street: string;
  suburb: string;
  service: string;
  comments: string;
};

export const QuoteForm = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [responseMessage, setResponseMessage] = useState("");
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log({ data });

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

        <div className="form-element">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="Your email"
            className="input"
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
