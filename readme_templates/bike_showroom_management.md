# 🏍️ Bike Showroom Management System

An enterprise-grade desktop automation application designed to manage dealership inventory, handle sales invoicing, track employee details, and generate billing reports. Built with C# and Microsoft SQL Server to demonstrate client-server enterprise architecture.

## 🚀 Key Features

- **Inventory Control:** Add, edit, delete, and view bike models, categorized by engine capacity, pricing, stock levels, and colors.
- **Sales & Invoicing:** Dynamically calculate taxes, discounts, final billing invoices, and output print-ready receipts.
- **Employee Directory:** Log shifts, roles, contact information, and payroll calculations.
- **Transaction Analytics:** Generate periodic sales summary records directly from the database using clean SQL aggregates.
- **Database Safety:** Incorporates SQL Transactions to guarantee billing integrity (no split sales or database mismatches).

## 🛠️ Tech Stack & Enterprise Tools

- **Core Language:** C# (OOP paradigms, event-driven architecture)
- **GUI Framework:** .NET Windows Forms (WinForms) / WPF
- **Database Engine:** Microsoft SQL Server (Transact-SQL)
- **Data Access:** ADO.NET (SqlCommand, SqlDataAdapter, SqlConnection)

---

## 📂 Project Structure

```text
showroom-mgmt/
│
├── App.config             # SQL Server connection string
├── database/
│   ├── database_schema.sql # Complete database setup scripts
│   └── stored_procedures.sql # Custom queries for sales calculations
│
├── Models/                # Data Transfer Objects (Bike, Customer, Invoice)
├── Forms/                 # Visual Layout screens (Dashboard, BillingForm)
├── Program.cs             # Application starting point
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- Visual Studio 2022 (with .NET Desktop Development workload).
- Microsoft SQL Server (LocalDB or Express).

### Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Bike-Showroom-Management.git
   cd Bike-Showroom-Management
   ```
2. **Setup Database:**
   - Open SQL Server Management Studio (SSMS).
   - Create a database named `ShowroomDB`.
   - Run the script `database/database_schema.sql` to generate tables.
3. **Configure Connection:**
   - Open the project in Visual Studio.
   - Update the connection string in `App.config` to point to your SQL Server instance.
4. **Build and Start:**
   - Press **F5** in Visual Studio to build and run the application.

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of CSE Diploma coursework.*
