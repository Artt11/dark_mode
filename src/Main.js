import { useState } from "react";

export const Main = () => {
  const [light, setLight] = useState(false);

  const click = () => {
    setLight(!light);
    if (!light) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };
  return (
    <>
      <h1>React Dark Mode</h1>
      <button onClick={click} className="btn">
        {light ? "Dark" : "Light"} Mode
      </button>
    </>
  );
};

