import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ setToys, toys }) {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(setToys)
  }, [])

  function deleteToy(idToDelete) {
    setToys(toys.filter(toy => toy.id === idToDelete ? null : toy))
  }

  function replaceToy(newToy) {
    setToys(toys.filter(toy => toy.id === newToy.id ? newToy : toy))
  }

  const toyComponents = toys.map(toy =>
    <ToyCard
      key={toy.id}
      toy={toy}
      deleteToy={deleteToy}
      replaceToy={replaceToy}
    />)
  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
