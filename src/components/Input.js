import React, { useState, useEffect } from "react";
import "../App.css";

const App = ({ onSubmit }) => {
  const [colors, setColors] = useState({
    light: "#ffffff",
    dark: "#212121",
    signal: "#fab700",
  });
  const [data, setData] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-light", colors.light);
    root.style.setProperty("--color-dark", colors.dark);
    root.style.setProperty("--color-signal", colors.signal);
  }, [colors]);

  const submitBtn = () => {
    try {
      const parsedJson = JSON.parse(data);
      onSubmit(parsedJson);
    } catch (error) {
      console.error("Invalid JSON", error);
    }
  };

  return (
    <div className="l-design-width">
      <Card>
        <Input
          placeholder=" "
          label="Enter data JSON"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </Card>
      <div className="btn-container">
        <button className="btn" onClick={submitBtn}>
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
};

const Card = ({ className, children }) => (
  <div className={`card ${className || ""}`}>{children}</div>
);

const Input = ({ placeholder, value, label, onChange }) => (
  <label className="input">
    <input
      className="input__field"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange} // Ensure this is included
    />
    <span className="input__label">{label}</span>
  </label>
);

export default App;
