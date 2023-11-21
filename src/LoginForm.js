import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Alert from "./Alert.js";
import { ReactComponent as Logo } from './shed.svg';

const initialState = {
  username: "",
  password: "",
};

function LoginForm({ handleLogin }) {
  const [formData, setFormData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState([]);

  const navigate = useNavigate();


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleLogin(formData);
      setFormData(initialState);
      navigate("/");
    } catch (err) {
      setErrorMessages(err);
    }

  }
  return (
    <div className="LoginForm">
      <h1>Log on in <i class="bi bi-emoji-smile-upside-down"></i></h1>
      <Logo className="LoginForm-logo1" />
      <Logo className="LoginForm-logo2" />
      <form onSubmit={handleSubmit}>

        <div className="LoginForm-input">
          <label htmlFor="username" className="form-label">Username</label>
          <input className="form-control"
            name="username"
            id="username"
            onChange={handleChange} />
        </div>
        <div className="LoginForm-input">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            id="password"
            onChange={handleChange} />
        </div>

        {/* {
          errorMessages.length !== 0 &&
          <Alert errors={errorMessages} />
        } */}

        <button className="LoginForm-btn btn btn-outline-dark"> Log In! </button>
      </form >
    </div>
  );
}


export default LoginForm;