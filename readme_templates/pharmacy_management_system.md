# 💊 Pharmacy Management System

A secure, high-performance database management platform designed to automate and streamline pharmacy sales cycles, inventory control, and customer-pharmacist interactions. Built with Python and SQL to demonstrate relational database design, role-based access control, and transaction integrity.

## 🚀 Key Features

- **Relational Database Design:** Fully normalized SQL tables (Drugs, Inventory, Customers, Employees, Transactions) with foreign keys and cascading delete constraints.
- **Inventory Tracking & Alerts:** Automated updates that adjust drug stock levels upon purchase, with low-stock flagging.
- **Role-Based Access Control:** Differentiated login gates for Administrators (inventory edit, salary views) and Pharmacists (billing, transaction logs).
- **Billing & Invoice Logging:** Dynamic transaction creation recording drug IDs, quantities, customer details, timestamps, and payment status.
- **Search Optimization:** Fast SQL search queries by drug name, category, or manufacturer.

## 🛠️ Tech Stack & Architecture

- **Backend Logic:** Python (structured OOP architecture).
- **Database Engine:** SQLite (local) / MySQL / PostgreSQL (relational management).
- **Interface:** CLI (Command Line Interface) / GUI (Tkinter/PyQt).

---

## 📂 Project Structure

```text
pharmacy-mgmt/
│
├── database/
│   ├── schema.sql         # SQL script to initialize tables
│   └── seed_data.sql      # Mock data for testing
│
├── src/
│   ├── db_connector.py    # Database connection wrapper
│   ├── auth.py            # User authentication and role management
│   ├── billing.py         # Transaction calculations and logging
│   └── inventory.py       # Stock level controllers
│
├── main.py                # Main application entry point
├── requirements.txt       # Python dependencies
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- Python 3.8+
- SQLite3 or MySQL Server installed.

### Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Pharmacy-Management-System.git
   cd Pharmacy-Management-System
   ```
2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
3. **Initialize the database:**
   ```bash
   python -c "import sqlite3; conn = sqlite3.connect('pharmacy.db'); conn.cursor().executescript(open('database/schema.sql').read()); conn.commit(); conn.close()"
   ```
4. **Run the application:**
   ```bash
   python main.py
   ```

---

## 📊 SQL Schema Highlights
This project demonstrates robust schema constraints:
```sql
CREATE TABLE Drugs (
    drug_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    expiry_date DATE NOT NULL,
    stock INTEGER DEFAULT 0 CHECK(stock >= 0)
);

CREATE TABLE Transactions (
    tx_id INTEGER PRIMARY KEY AUTOINCREMENT,
    drug_id INTEGER,
    quantity INTEGER,
    total_price REAL,
    tx_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(drug_id) REFERENCES Drugs(drug_id) ON DELETE CASCADE
);
```

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of B.Tech CSE coursework.*
