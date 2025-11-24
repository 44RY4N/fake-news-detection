import { useState } from "react";
import { predictNews } from "./api";
import ResultCard from "./ResultCard";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    const data = await predictNews(title, text);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>📰 Fake News Detector</h1>
      <p>Enter a news title and text to check its authenticity.</p>

      <input
        type="text"
        placeholder="News Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="News Text / Body"
        rows="6"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Checking..." : "Check News"}
      </button>

      <ResultCard result={result} />
    </div>
  );
}

export default App;
