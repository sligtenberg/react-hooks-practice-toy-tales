import React from "react";

function ToyCard({ toy, deleteToy, replaceToy }) {
  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(deleteToy(toy.id))
  }

  function handleLike(){
    const newToy = toy
    newToy.likes++
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(replaceToy(newToy))

  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
