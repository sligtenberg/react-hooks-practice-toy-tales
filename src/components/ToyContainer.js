import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ setToys, toys }) {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then(setToys)
  }, [])

  function deleteToy(toyToDelete) {
    setToys(toys.filter(toy => toy.id === toyToDelete.id ? null : toy))
  }

  const toyComponents = toys.map(toy => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy}/>)
  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
