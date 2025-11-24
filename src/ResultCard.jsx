import "./App.css";

export default function ResultCard({ result }) {
  if (!result) return null;

  const isReal = result.prediction === "REAL";

  return (
    <div className={`result-card ${isReal ? "real" : "fake"}`}>
      <h2>{isReal ? "✅ REAL NEWS" : "❌ FAKE NEWS"}</h2>

      <p>
        <strong>Probability REAL:</strong> {(result.prob_real * 100).toFixed(2)}%
      </p>
      <p>
        <strong>Probability FAKE:</strong> {(result.prob_fake * 100).toFixed(2)}%
      </p>
    </div>
  );
}
