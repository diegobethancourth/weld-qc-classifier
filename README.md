# Weld QC Classifier 

A browser-based weld quality classification tool built with TensorFlow.js.
Upload a GelSight weld surface image and get an instant **Pass / Fail** result — no server, no installation required.

## 🚀 Live App
👉 [Open Weld QC Classifier](https://diegobethancourth.github.io/weld-qc-classifier/)

## 📌 About
This project was developed as part of **MFG 598 – Manufacturing System Operations in Industry 4.0** at Arizona State University.

**Authors:** Diego Bethancourth & Xavier Hebol D Cruze

## 🧠 Model
- Architecture: Convolutional Neural Network (CNN)
- Input: 224×224 grayscale weld surface images
- Output: Binary classification — Pass (0) or Fail (1)
- Training Accuracy: 97%
- Framework: TensorFlow / Keras → converted to TensorFlow.js

## 📊 Dataset
GelSight weld surface images organized into three original classes:
- Good → Pass (600 images)
- OK → Fail (43 images)
- Bad → Fail (102 images)

## 🛠️ How to Use
1. Open the live app link above
2. Drop or upload any weld surface image
3. Click **Analyze Weld**
4. View the Pass/Fail verdict with confidence score

## 📁 Repository Structure
├── index.html              # Full web application
├── model.json              # TensorFlow.js model architecture
├── group1-shard1of12.bin   # Model weights (12 shards)
├── ...
└── group1-shard12of12.bin

## 📚 Course
MFG 598 · Arizona State University · Spring 2026 · Diego Bethancourth M.S. Manufacturing Engineering Candidate
