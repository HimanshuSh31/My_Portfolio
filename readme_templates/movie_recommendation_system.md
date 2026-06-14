# 🎬 Movie Recommendation System

An interactive machine learning project implementing content-based and collaborative filtering to deliver personalized movie recommendations. Developed in a Jupyter Notebook environment to demonstrate data preprocessing, vectorization, and similarity metrics.

## 🚀 Key Features

- **Text Vectorization (TF-IDF):** Transforms unstructured metadata (genres, keywords, cast, crew, overview) into numerical feature vectors.
- **Cosine Similarity Metrics:** Measures directional similarity between text-embedding vectors to yield highly relevant recommendation scoring.
- **Data Preprocessing Pipeline:** Tokenizes tags, handles missing values, removes stop words, and merges multiple dataset files.
- **Collaborative Filtering:** Includes structural placeholders for user-item recommendation loops.
- **Top-N Predictions:** Returns a sorted list of the top 5 or 10 most similar movie recommendations based on user input.

## 🛠️ Tech Stack & Machine Learning Tools

- **Core Language:** Python 3.9+
- **Data Engineering:** Pandas, NumPy
- **Machine Learning:** Scikit-Learn (`TfidfVectorizer`, `cosine_similarity`)
- **IDE:** Jupyter Notebook

---

## 📂 Project Structure

```text
movie-recommender/
│
├── data/
│   ├── tmdb_5000_movies.csv     # Movie metadata (genres, budget, etc.)
│   └── tmdb_5000_credits.csv    # Cast and crew information
│
├── notebooks/
│   └── recommender_model.ipynb  # Data exploration, vectorization & modeling
│
├── requirements.txt             # Dependency list
└── README.md
```

---

## 🔬 How It Works

1. **Feature Engineering:** We merge the cast, crew, keywords, and genres columns into a single unified `tags` column.
2. **Text Stemming:** Standardizes words (e.g. *activities* -> *activi*, *loving* -> *love*) to improve keyword matching.
3. **Bag of Words / TF-IDF:** Converted text tokens into a sparse coordinate matrix.
4. **Vector Math:**
   \[
   \text{Similarity}(A, B) = \cos(\theta) = \frac{A \cdot B}{\|A\| \|B\|}
   \]

---

## 🏁 Getting Started

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Movie-Recommendation-System.git
   cd Movie-Recommendation-System
   ```
2. **Install requirements:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Download Dataset:** Download the TMDB 5000 dataset and place it in the `data/` folder.
4. **Launch Jupyter:**
   ```bash
   jupyter notebook
   ```
   Open `notebooks/recommender_model.ipynb` and run the cells.

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of B.Tech CSE coursework.*
