<div align="center">
  <h1>☀️ Aurora Weather</h1>
  <p><strong>A Beautiful & Intuitive Mobile Weather Application</strong></p>
  
  ![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue.svg)
  ![Expo](https://img.shields.io/badge/Expo-~54.0-000020.svg)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌟 Overview

**Aurora** is a modern, cross-platform mobile weather application built with React Native and Expo. Designed with a focus on beautiful UI/UX, Aurora provides users with comprehensive weather information, including current conditions, hourly forecasts, and detailed sky science metrics such as UV index, moon phases, sunrise/sunset times, and air quality data.

This project serves as a portfolio piece demonstrating proficiency in:
- Modern React Native development
- TypeScript implementation
- Component-based architecture
- Custom animations and illustrations
- Responsive design patterns
- Cross-platform mobile development (iOS, Android, Web)

---

## ✨ Features

### 🌤️ **Current Weather Display**
- Real-time weather conditions with dynamic illustrations
- Location-based weather information
- Temperature display in Celsius
- Animated weather icons (Sun, Clouds, Rain, Snow, Lightning, Wind)
- Adaptive UI based on current weather conditions

### 📊 **Hourly Forecast**
- 24-hour weather forecast
- Hourly temperature predictions
- Weather condition changes throughout the day
- Scrollable timeline view

### 🔬 **Sky Science Metrics**
- **UV Index**: Real-time UV radiation levels with visual indicators
- **Moon Phase**: Current moon phase with illumination percentage
- **Sunrise & Sunset**: Daily sun event times
- **Moonrise & Moonset**: Monthly lunar event times
- **Humidity**: Atmospheric moisture levels
- **Air Quality**: AQI (Air Quality Index) with health recommendations
- **Visibility**: Current visibility distance

### 🎨 **Beautiful UI/UX**
- Dynamic color schemes based on weather conditions
- Smooth animations and transitions
- Custom SVG illustrations for weather conditions
- Intuitive navigation with tab views
- Responsive design for various screen sizes
- Dark mode support

### 🔄 **Navigation**
- Tab-based navigation between forecast and metrics
- Side button navigation for quick access to different views
- Smooth page transitions
- Dot indicators for current tab state

---

## 📸 Screenshots

### Home Screen
<!-- Add screenshot of main weather screen here -->
*Main weather display showing current conditions*

### Hourly Forecast
<!-- Add screenshot of hourly forecast view here -->
*24-hour weather forecast timeline*

### Sky Science Metrics
<!-- Add screenshot of metrics view here -->
*Detailed weather and astronomical data*

### Different Weather Conditions
<div align="center">
  <!-- Add screenshots of different weather conditions here -->
  <p><em>Aurora adapts its UI for different weather conditions: Sunny, Cloudy, Rainy, Snowy, Lightning, and Windy</em></p>
</div>

---

## 🛠️ Tech Stack

### **Frontend**
- **React Native** (0.81.5) - Cross-platform mobile framework
- **Expo** (~54.0) - Development platform and tooling
- **TypeScript** (~5.9.2) - Type-safe JavaScript
- **React** (19.1.0) - UI library

### **Navigation**
- **Expo Router** (~6.0) - File-based routing for React Native
- **React Navigation** (^7.1.8) - Navigation library
- **React Native Tab View** (^4.2.2) - Tab navigation component

### **UI Components & Libraries**
- **React Native SVG** (15.12.1) - SVG support for custom illustrations
- **React Native Reanimated** (~4.1.1) - Advanced animations
- **React Native Gesture Handler** (~2.28.0) - Touch gesture handling
- **React Native Gauge** (^0.1.2) - Gauge visualizations
- **Expo Symbols** (~1.0.8) - Icon system

### **Development Tools**
- **ESLint** (^9.25.0) - Code linting
- **Expo CLI** - Development server and build tools

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Expo CLI** - Install globally: `npm install -g expo-cli`
- **Expo Go** app on your mobile device (optional, for testing on physical devices)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SamvitPrakash-23525119/Aurora.git
   cd Aurora
   ```

2. **Navigate to the project directory**
   ```bash
   cd Aurora
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

#### **Start the development server**
```bash
npm start
# or
expo start
```

#### **Run on Android**
```bash
npm run android
# or
expo start --android
```

#### **Run on iOS** (macOS only)
```bash
npm run ios
# or
expo start --ios
```

#### **Run on Web**
```bash
npm run web
# or
expo start --web
```

#### **Using Expo Go**
1. Start the development server: `npm start`
2. Scan the QR code with your device:
   - **iOS**: Use the Camera app
   - **Android**: Use the Expo Go app
3. The app will load on your device

---

## 📁 Project Structure

```
Aurora/
├── app/                          # Main application screens
│   ├── _layout.tsx              # Root layout configuration
│   ├── index.tsx                # Home screen with current weather
│   ├── weather.tsx              # Detailed weather view with tabs
│   └── forcast.tsx              # Forecast page
│
├── components/                   # Reusable React components
│   ├── illustrations/           # Custom SVG weather illustrations
│   │   ├── Sun.tsx
│   │   ├── Cloud.tsx
│   │   ├── Lightning.tsx
│   │   ├── RainDroplets.tsx
│   │   ├── Snowflakes.tsx
│   │   ├── Wind.tsx
│   │   └── ... (moon phases and other icons)
│   │
│   ├── weather(Tabs)/           # Tab view components
│   │   ├── Forecast.tsx         # Hourly forecast tab
│   │   └── Metrics.tsx          # Sky science metrics tab
│   │
│   ├── weather_card/            # Hourly weather card component
│   ├── air_quality_card/        # Air quality display card
│   ├── humidity_card/           # Humidity display card
│   ├── uv_index_card/           # UV index display card
│   ├── visibility_card/         # Visibility display card
│   ├── sunrise_card/            # Sunrise time card
│   ├── sunset_card/             # Sunset time card
│   ├── moonrise_card/           # Moonrise time card
│   ├── moonset_card/            # Moonset time card
│   ├── moon_phase_card/         # Moon phase display card
│   ├── side_button/             # Navigation side button
│   ├── dot_indicator/           # Tab indicator component
│   ├── vertical_progress_bar/  # Progress bar component
│   └── placeholders/            # Placeholder components
│
├── styles/                       # Styling and theming
│   ├── pages/                   # Page-specific styles
│   ├── components/              # Component-specific styles
│   └── global/                  # Global styles and colors
│
├── assets/                       # Static assets
│   └── images/                  # App icons and images
│
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── eslint.config.js             # ESLint configuration
```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm start` | Starts the Expo development server |
| `npm run android` | Runs the app on an Android emulator or device |
| `npm run ios` | Runs the app on an iOS simulator or device (macOS only) |
| `npm run web` | Runs the app in a web browser |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run reset-project` | Resets the project to initial state |

---

<div align="center">
  <p>Made with ☀️ by Samvit Prakash & Jerusha Thaver</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
