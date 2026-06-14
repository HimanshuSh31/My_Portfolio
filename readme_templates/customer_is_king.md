# 🎮 Customer is King

A strategic business simulation game built with Unity, where players run a financial brokerage firm, make market-driven decisions, and interface with a real-time database to manage client assets, evaluate risk, and optimize company growth.

## 🚀 Key Features

- **Business Simulation Loop:** Simulates economic shifts, client risk tolerances, and asset price actions.
- **Firebase Realtime Sync:** Stores player accounts, transaction histories, and company ledger balances securely in the cloud.
- **Dynamic UI Dashboard:** Provides clean canvas charts showing firm capital, active broker slots, and customer satisfaction meters.
- **Interactive Scenarios:** Features structured client scenarios requiring strategic decisions on commission rates, asset allocations, and compliance tasks.

## 🛠️ Tech Stack & Game Architecture

- **Game Engine:** Unity 2022.3+ (LTS)
- **Programming Language:** C# (OOP, event-driven pattern)
- **Database Backend:** Firebase Realtime Database / Firestore
- **Networking:** Firebase REST API / Unity SDK integration

---

## 📂 Project Structure

```text
customer-is-king/
│
├── Assets/
│   ├── Scripts/               # C# Controllers and Network handlers
│   │   ├── DatabaseManager.cs # Firebase connection and sync code
│   │   ├── GameManager.cs     # Game state loop and logic
│   │   └── UIManager.cs       # Canvas updates and graph plots
│   │
│   ├── Scenes/                # Game levels and UI menus
│   ├── Prefabs/               # Reusable UI cards and brokers
│   └── Textures & Fonts/      # Branding assets
│
├── ProjectSettings/           # Unity configuration files
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- Unity Hub & Editor `2022.3.x` or newer.
- A free Firebase Account.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Customer-is-King.git
   cd Customer-is-King
   ```
2. **Open in Unity Editor:**
   - Launch Unity Hub -> Add Project -> Select the cloned directory.
3. **Firebase Configuration:**
   - Create a project on the [Firebase Console](https://console.firebase.google.com/).
   - Enable Realtime Database.
   - Download the `google-services.json` (Android) or `GoogleService-Info.plist` (iOS) and place it in the `Assets/` directory.
4. **Build and Run:**
   - Press **Play** in the editor or export as WebGL/PC build.

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of B.Tech CSE coursework.*
