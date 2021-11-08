import { useState } from "react";
import { validateEmail } from "../../utils/helpers"

export default function About() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Name or email is invalid");
      return;
    }
    if (!message) {
      setErrorMessage("Please enter a message");
      return;
    }

    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1 className='m-3'>Contact Me</h1>
      <div>
        <form className="form contact-form">
          <div className="form-group m-3">
            <input
              className="form-control"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="form-group m-3">
            <input
              className="form-control"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group m-3">
            <textarea
              className="form-control"
              value={message}
              name="message"
              onChange={handleInputChange}
              rows="7"
              placeholder="Your message"
            />
          </div>
          <div className="form-group m-4">
            <button className='btn btn-primary' type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
        {errorMessage && (
          <div className="m-4 text-danger">
            <h4>{errorMessage}</h4>
          </div>
        )}
      </div>
    </div>
  );
}