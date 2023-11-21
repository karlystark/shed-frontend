import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";
import Alert from "./Alert.js";
import { ReactComponent as Logo } from './shed.svg';
import ColorPicker from "./ColorPicker.js";

const initialState = {
  username: "",
  password: "",
  image: "",
  color: ""
};

function SignupForm({ handleAddUser }) {
  const [formData, setFormData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState([]);

  const navigate = useNavigate();


  function handleColorSelect(color){
    setFormData(fData => ({...formData, color}));
  }

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
      await handleAddUser(formData);
      setFormData(initialState);
      navigate("/");
    } catch (err) {
      setErrorMessages(err);
    }

  }
  return (
    <div className="SignupForm">
      <h1>Join the Shed <i class="bi bi-emoji-smile-upside-down"></i></h1>
      <Logo className="SignupForm-logo1" />
      <Logo className="SignupForm-logo2" />
      <Logo className="SignupForm-logo3" />
      <form onSubmit={handleSubmit}>

        <div className="SignupForm-input">
          <label htmlFor="username" className="form-label">Username</label>
          <input className="form-control"
            name="username"
            id="username"
            onChange={handleChange} />
        </div>
        <div className="SignupForm-input">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            id="password"
            onChange={handleChange} />
        </div>
        <div className="SignupForm-input">
          <label htmlFor="image" className="form-label">Profile Photo (please upload a square photo)</label>
          <input className="form-control"
            type="file"
            accept=".jpg"
            name="image"
            id="image"
            onChange={handleChange} />
        </div>
        <div className="SignupForm-input">
         <ColorPicker doColorSelect={handleColorSelect}/>
        </div>

        {/* {
          errorMessages.length !== 0 &&
          <Alert errors={errorMessages} />
        } */}

        <button className="SignupForm-btn btn btn-outline-dark"> Join the shed! </button>
      </form >
    </div>
  );
}


export default SignupForm;