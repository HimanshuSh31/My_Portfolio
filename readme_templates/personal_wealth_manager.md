# 💼 Personal Wealth Manager

A secure, offline desktop application designed to track personal net worth, analyze monthly cash flows, parse bank statement records, and plot asset distributions. Built with Python and PyQt6, featuring encrypted local database storage for complete privacy.

## 🚀 Key Features

- **Local SQLCipher Encryption:** Encrypts your SQLite transaction database using AES-256 to ensure complete offline financial data privacy.
- **Automated Statement Parser:** Import CSV/PDF bank statement files to auto-categorize income and expenditure.
- **Vector Plotly Charts:** Interactive wealth visualization showing expense breakdowns, portfolio distributions, and net-worth growth curves.
- **Goal Setter & Budgeting:** Compare real-time monthly spending limits against customized limits, displaying progress meters.
- **Backup & Restore:** Locally export and restore encrypted backups.

## 🛠️ Tech Stack & Desktop Tools

- **GUI Framework:** PyQt6 (Qt Widgets, layout structures, and stylesheets)
- **Data Visualizations:** Plotly / Matplotlib (vector plots embedded in Qt)
- **Database Engine:** SQLite (configured with SQLCipher wrapper)
- **Programming Language:** Python 3.10+

---

## 📂 Project Structure

```text
wealth-manager/
│
├── database/
│   ├── encrypted_db.py     # SQLCipher setup and queries
│   └── models.py           # Database transaction mapping
│
├── parser/
│   └── statement_parser.py # CSV/PDF statement processing algorithms
│
├── ui/
│   ├── main_window.py      # Main dashboard layout
│   ├── widgets/            # Custom charts, transaction inputs
│   └── styles.css          # Dark/Light theme styles
│
├── main.py                 # Core entry script
├── requirements.txt        # Package dependencies
└── README.md
```

---

## 🏁 Getting Started

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Personal-Wealth-Manager.git
   cd Personal-Wealth-Manager
   ```
2. **Install requirements:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the Application:**
   ```bash
   python main.py
   ```

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of B.Tech CSE coursework.*
