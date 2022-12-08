import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function createNewToy(newToy) {
    newToy.id = toys.length+1
    setToys([...toys, newToy])
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm createNewToy={createNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToys={setToys} toys={toys}/>
    </>
  );
}

export default App;
