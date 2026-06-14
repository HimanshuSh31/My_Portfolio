# 🎵 Music Recommendation System

A machine learning recommendation engine designed to suggest songs and artists using content-based filtering, item-to-item similarity matrices, and collaborative user profiling. Built with Python to demonstrate matrix operations and recommendation system architectures.

## 🚀 Key Features

- **Item-Similarity Matrix:** Calculates song similarity indices using cosine metrics across artist, release year, and genre profiles.
- **Popularity-Based Baseline:** Includes a non-personalized baseline recommender suggesting trending songs to new users.
- **Collaborative Filtering Base:** Models user listening histories (play count aggregates) to capture user preferences.
- **Sparse Matrix Representations:** Optimized database memory utilization using sparse arrays for matrix multiplication.
- **Interactive Search:** Input a song name to retrieve a ranked list of top recommendation candidates.

## 🛠️ Tech Stack & Modeling Tools

- **Core Language:** Python 3.9+
- **Data Engineering:** Pandas, NumPy
- **Machine Learning:** Scikit-Learn
- **Execution Environment:** Jupyter Notebook / Python script

---

## 📂 Project Structure

```text
music-recommender/
│
├── data/
│   ├── songs.csv             # Song profiles metadata
│   └── user_triplets.csv     # User-song listening count triplets
│
├── src/
│   ├── data_loader.py        # Dataset preprocessing and merging
│   └── recommenders.py       # Recommendation engines code
│
├── main.py                   # CLI testing entry point
├── requirements.txt          # Dependencies
└── README.md
```

---

## 🔬 Recommender logic
The system operates two modes:
1. **Popularity Recommender:** A global threshold metric recommending songs with highest collective play counts:
   \[
   \text{Score}_i = \sum \text{play\_count}_i
   \]
2. **Item-Similarity Recommender:** Suggests tracks that align closest to user's history vectors using Cosine similarity matrices:
   \[
   S(x, y) = \frac{\sum_{i} x_i y_i}{\sqrt{\sum_i x_i^2} \sqrt{\sum_i y_i^2}}
   \]

---

## 🏁 Getting Started

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Music-Recommendation-System.git
   cd Music-Recommendation-System
   ```
2. **Install requirements:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the system:**
   ```bash
   python main.py
   ```

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of B.Tech CSE coursework.*
