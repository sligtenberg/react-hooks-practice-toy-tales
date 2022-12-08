import React from "react";

function ToyForm({ createNewToy }) {
  function submitNewToy(event) {
    event.preventDefault()

    const newToy = {
      name: event.target[0].value, 
      image: event.target[1].value,
      likes: 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(createNewToy(newToy))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
