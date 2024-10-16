import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const Styles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Alice&family=Spectral:wght@300&display=swap");

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
    margin: auto;
    background-color: rgba(69, 89, 73, 0.9);
    border-radius: 8px;
    color: #e5f5f0;
  }

  label {
    line-height: 34px;
    display: flex;
    flex-direction: column;

    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
  }

  .margin-top {
    margin-top: 24px;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }

  input,
  select {
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.8);
    color: black;

    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
  }

  button {
    margin: 0 auto;
    min-width: 170px;
    padding: 10px;
    background-color: transparent;
    border: solid 1px rgb(245, 183, 66);
    color: rgb(245, 183, 66);
    cursor: pointer;
    font-size: 16px;
    border-radius: 50px;
    transition: background-color 0.3s, color 0.3s;

    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
  }

  button:hover {
    background-color: rgb(245, 183, 66);
    color: #455949;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: rgba(245, 183, 66);
    max-width: 320px;
    padding: 44px 24px;
    border-radius: 5px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      color: #455949;
      font-size: 34px;
      font-family: "Alice", serif;
      font-weight: 400;
      font-style: normal;
      font-style: italic;

      @media only screen and (max-width: 280px) {
        font-size: 13.077vw;
      }
    }
  }
`;

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [isAttending, setIsAttending] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      attending: isAttending ? "Yes" : "No",
    };

    emailjs
      .send(
        "service_0vclej2", // Your service ID
        "template_ocg3cuz", // Your template ID
        templateParams,
        "onV4InPOesawgVb8O" // Your public key
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setMessage("Your RSVP has been sent to Chanel and Yuya! Thank you :)");
        setError("");
        setName("");
        setIsAttending(true);
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
        setError("Oops! Something went wrong. Please try again.");
        setMessage("");
      });
  };

  return (
    <Styles>
      <form onSubmit={handleSubmit}>
        <div className="margin-top">
          <label>
            Your Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="margin-bottom">
          <label>
            Will you attend?
            <select
              value={isAttending ? "yes" : "no"}
              onChange={(e) => setIsAttending(e.target.value === "yes")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
        <button type="submit">Send RSVP</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      {/* Modal for confirmation message */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <p>{message}</p>
          </div>
        </div>
      )}
    </Styles>
  );
};

export default RSVPForm;
