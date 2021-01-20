import React from "react";
import { createQuote } from "./API";

// might need to fix submit

export default function AddQuote({ onclose }) {
  // initial quote value
  const [values, setValues] = React.useState({
    quote: "",
    author: "",
  });
  const [formHidden, setFormHidden] = React.useState(true);
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
      <div class="form-style-10">
        <form onSubmit={handleSubmit}>
          <div class="section"></div>
          <div class="inner-wrap">
            <label>
              Quote{" "}
              <textarea
                name="quote"
                value={values.quote}
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
          <label>
            Author{" "}
            <input
              type="text"
              name="author"
              onChange={handleInputChange}
              value={values.author}
            />
          </label>
          <div class="button-section">
            <input
              type="submit"
              name="Add Quote"
              onClick={() => handleSubmit(values)}
            />
          </div>{" "}
        </form>
      </div>
    </div>
  );
}
