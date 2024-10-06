"use client";
import { useState } from "react";
import TextTransitionUp from "./text-transition-up";

export default function MessageForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    message: "",
  });

  // Handler for input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: any) => {
    // Remove all non-digit characters
    const input = e.target.value.replace(/\D/g, "");

    // Limit input to 10 digits
    if (input.length > 10) {
      return;
    }

    let formattedNumber = input;

    if (input.length > 0) {
      formattedNumber = `(${input.slice(0, 3)}`;
    }
    if (input.length >= 4) {
      formattedNumber += `) ${input.slice(3, 6)}`;
    }
    if (input.length >= 7) {
      formattedNumber += `-${input.slice(6, 10)}`;
    }

    setFormData((prevState) => ({
      ...prevState,
      phone: formattedNumber,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted: ", formData);
    setMessageSent(true);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
      email: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p className={(messageSent ? "show-msg " : "") + "success-msg"}>
        <strong>Success!</strong> Your request has been sent to us.
      </p>
      <TextTransitionUp className="form-row">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
            placeholder="Phone Number"
            required
          />
        </div>
      </TextTransitionUp>
      <TextTransitionUp className="form-row">
        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value={"Carpet Cleaning"}>Carpet Cleaning</option>
            <option value={"Carpet Stretching"}>Carpet Stretching</option>
            <option value={"Upholstery Cleaning"}>Upholstery Cleaning</option>
            <option value={"Tile Cleaning"}>Tile Cleaning</option>
            <option value={"Window Cleaning"}>Window Washing</option>
            <option value={"Solar Panel Cleaning"}>Solar Panel Cleaning</option>
            <option value={"Other"}>Other</option>
          </select>
        </div>
      </TextTransitionUp>
      <TextTransitionUp className="message-container">
        <textarea
          maxLength={5000}
          rows={10}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
      </TextTransitionUp>
      <button type="submit">SEND MESSAGE</button>
    </form>
  );
}
