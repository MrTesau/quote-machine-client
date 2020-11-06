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
      <div className="container">
        <button className="btn" onClick={() => setFormHidden(!formHidden)}>
          {" "}
          Add a quote:
        </button>
      </div>
      {formHidden ? null : (
        <div class="form-style-10">
          <form onSubmit={handleSubmit}>
            {/*} <input
              type="textbox"
              name="quote"
              onChange={handleInputChange}
              value={values.quote}
      /> */}
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
            {/*}
            <input
              type="textbox"
              name="author"
              onChange={handleInputChange}
              value={values.author}
    /> */}
            <div class="button-section">
              <input
                type="submit"
                name="Add Quote"
                onClick={() => handleSubmit(values)}
              />
            </div>{" "}
            {/* 
            <button type="submit" onClick={() => handleSubmit(values)}>
              Submit!
            </button>
    */}
          </form>
        </div>
      )}
    </div>
  );
}
