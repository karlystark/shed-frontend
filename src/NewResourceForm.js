import "./NewResourceForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";


function NewResourceForm({ resources, handleAddResource }) {
  const initialState = {
    title: "",
    description: "",
    image: "",
    alt: "",
    quantity: ""
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState([]);

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
      await handleAddResource(formData);
      setFormData(initialState);
      navigate("/");
      //navigate to previous page visited (profile page)
    } catch (err) {
      setErrorMessages(err);
    }

  }
  return (
    <div className="NewResourceForm">
      <h1>Add New Resource</h1>
      <img src="/leafplant.png" alt="" className="NewResourceForm-leaf"/>


      <form onSubmit={handleSubmit}>

        <div className="NewResourceForm-input">
          <label htmlFor="title" className="form-label">Title</label>
          <input className="NewResourceForm-placeholder form-control"
            name="title"
            id="title"
            placeholder="generator"
            onChange={handleChange} />
        </div>

        <div className="NewResourceForm-input">
          <label htmlFor="description" className="form-label">Description</label>
          <input className="NewResourceForm-placeholder form-control"
            name="description"
            id="description"
            placeholder="champion 3550W weekender portable generator"
            onChange={handleChange} />
        </div>

        <div className="NewResourceForm-input">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input className="NewResourceForm-placeholder form-control"
            name="quantity"
            type="number"
            min="1"
            max="50"
            id="quantity"
            placeholder="how many do you have?"
            onChange={handleChange} />
        </div >

        <div className="NewResourceForm-input">
          <label htmlFor="image">Image</label>
          <input className="NewResourceForm-placeholder"
            type="file"
            accept=".jpg"
            name="image"
            id="image"
            onChange={handleChange} />
        </div>

        <div className="NewResourceForm-input">
          <label htmlFor="alt" className="form-label">Alt-text</label>
          <input className="NewResourceForm-placeholder form-control"
            name="alt"
            id="alt"
            placeholder="add alt-text for your image"
            onChange={handleChange} />
        </div>

        {
          errorMessages.length !== 0 &&
          <Alert errors={errorMessages} />
        }
        < button className="NewResourceForm-btn btn btn-outline-dark"> Add Resource</button>
      </form >
    </div >
  );
}

export default NewResourceForm;