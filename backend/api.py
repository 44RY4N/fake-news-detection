from fastapi import FastAPI
from pydantic import BaseModel
import joblib

# Load model + embedder
classifier = joblib.load("minilm_classifier.pkl")
embedder = joblib.load("minilm_embedder.pkl")

app = FastAPI()

class NewsItem(BaseModel):
    title: str
    text: str

@app.post("/predict")
def predict_news(item: NewsItem):
    combined = item.title + " " + item.text
    embedding = embedder.encode([combined])
    probas = classifier.predict_proba(embedding)[0]
    label = "REAL" if probas[1] > probas[0] else "FAKE"
    return {
        "prediction": label,
        "prob_real": float(probas[1]),
        "prob_fake": float(probas[0])
    }

@app.get("/")
def home():
    return {"status": "API is running ✅"}
