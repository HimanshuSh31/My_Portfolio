# 📷 Computer Vision Face Detector

A modular Python program implementing real-time facial detection, tracking, and feature mapping. Demonstrates the execution of Haar Cascades, HOG (Histogram of Oriented Gradients), and Deep Learning Convolutional Neural Networks (CNN) using OpenCV and Dlib.

## 🚀 Key Features

- **Haar Cascade Classifier:** Fast detection baseline optimized for CPU-efficient facial tracking.
- **HOG + Linear SVM Face Detector:** Highly accurate frontal face mapping using Dlib's robust feature descriptor.
- **CNN-Based Landmarking:** Extracts 68 facial landmarks (eyes, eyebrows, nose, mouth, jawline) dynamically in real-time.
- **Real-Time Video Stream Parser:** Interfaces directly with webcam hardware using OpenCV multi-threading pipelines.
- **FPS (Frames Per Second) Monitor:** Overlay FPS statistics to measure algorithmic performance across different models.

## 🛠️ Tech Stack & CV Tools

- **Programming Language:** Python 3.9+
- **Computer Vision:** OpenCV (`opencv-python`), Dlib
- **Helper Libraries:** NumPy, CMake (required for building Dlib)

---

## 📂 Project Structure

```text
face-detector/
│
├── models/
│   ├── haarcascade_frontalface_default.xml # Haar Cascade config
│   └── shape_predictor_68_face_landmarks.dat # 68 landmarks binary model
│
├── src/
│   ├── webcam_stream.py      # Threaded webcam pipeline
│   └── landmark_detector.py  # Dlib facial landmark calculations
│
├── main.py                   # Entry point for selecting detectors
├── requirements.txt          # Python dependencies
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- Python 3.9+
- C++ Compiler tools (Visual Studio Build Tools for Windows, or Xcode/g++ for macOS/Linux) to install Dlib.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HimanshuSh31/Computer-Vision-Face-Detector.git
   cd Computer-Vision-Face-Detector
   ```
2. **Download Model Weights:**
   - Download the pre-trained `shape_predictor_68_face_landmarks.dat` from the Dlib repository and place it in the `models/` directory.
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the detector:**
   ```bash
   python main.py
   ```

---
*Developed by [Himanshu Sharma](https://github.com/HimanshuSh31) as part of B.Tech CSE coursework.*
