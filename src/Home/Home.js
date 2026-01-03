import { useState } from "react";
export const Home = () => {
  const dictonary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");


  const handleSearch = () => {
    const result = dictonary.find((item) => item.word.toLowerCase() === input.toLowerCase());
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginTop: "20px" }} onClick={(e) => handleSearch()}>
        Search
      </button>
      <h3>Definition:</h3> <p style={{ marginTop: "20px" }}>{definition}</p>
    </div>
  );
};
