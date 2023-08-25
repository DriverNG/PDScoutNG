import { useState } from "react";
import '../styles/app.css'

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing`);
      setEmail("");
    }
  }

  return (
    <>
      <form className="formBox" onSubmit={handleSubmit}>
        <input className="input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleInput}
        />
        <button id="button" type="submit">
          Get notified
        </button>
        {!isEmailValid ? <p style={{color: "#E381BC",
        position: "absolute",
        display: "flex",
        right: "480px",
        top: "100px"
        }}>invalid email address</p> : null}
      </form>
    </>
  );
}
