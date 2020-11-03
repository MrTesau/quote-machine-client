import React from "react";
import { createQuote } from "./API";

// might need to fix submit

export default function AddQuote({ onclose }) {
  // initial quote value
  const [values, setValues] = React.useState({
    quote: "",
    author: "",
  });
  // handleChange in form field
  // find field target name
  // find field target value
  // call SetValues, set field Name to value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Submit new Quote to DB
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      await createQuote(values);
      onclose();
      setValues({
        quote: "",
        author: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <p> Add a quote:</p>
        <input
          type="textbox"
          name="quote"
          onChange={handleInputChange}
          value={values.quote}
        />

        <p> Author:</p>
        <input
          type="textbox"
          name="author"
          onChange={handleInputChange}
          value={values.author}
        />
        <br />
        <br />
        <button type="submit" onClick={() => handleSubmit(values)}>
          Submit!
        </button>
      </form>
    </div>
  );
}
