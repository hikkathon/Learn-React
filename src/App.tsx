import "./App.css";
import { useState } from "react";
import Field from "./Field";

function App() {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field label="Last name" onChange={setLastName} text={lastName} />
        <Field label="First name" onChange={setFirstName} text={firstName} />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field label="First name" onChange={setFirstName} text={firstName} />
        <Field label="Last name" onChange={setLastName} text={lastName} />
        {checkbox}
      </>
    );
  }
}

export default App;
