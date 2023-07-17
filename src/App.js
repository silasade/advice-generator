import { useEffect, useState } from "react";

import Advice from "./components/Advice";
import "./App.css"
function App() {
  const [items, setItems] = useState(null);
  const [id, setId] = useState(1); // Provide an initial value for 'id'

  

  window.onload = () => {
    const randomID = Math.floor(Math.random() * 224) + 1;
    return setId(randomID);
  };
  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${id}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [id]);
  function handleClick() {
    setId(() => {
      return Math.floor(Math.random() * 224) + 1;
    });
  }

  return (
    <div>
      {items && (
        <Advice
          key={items.slip.id}
          onClick={handleClick}
          id={items.slip.id}
          advice={items.slip.advice}
        />
      )}
    </div>
  );
}

export default App;
