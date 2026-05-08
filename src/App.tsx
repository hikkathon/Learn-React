import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "Hide hint" : "Show hint"}
      </button>
    </div>
  );
}

export default App;
