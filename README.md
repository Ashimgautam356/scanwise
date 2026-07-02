# ScanWise

> **ScanWise** is an AI-powered mobile application that helps users understand everyday products by simplifying product information into easy-to-read language. Users can scan products, receive AI-generated explanations, manage expiry dates, and set medication reminders—all from a single app.

---

## 📖 Project Description

Many consumer products, especially medicines, cosmetics, food items, and electronic devices, contain complex labels and instructions that are difficult for many users to understand.

**ScanWise** solves this problem by using Artificial Intelligence and web-based information retrieval to provide users with simplified explanations of product usage, ingredients, precautions, and other important details.

The application also includes productivity features such as expiry date notifications and medicine reminders, making it useful beyond simply identifying products.

---

# ✨ Features

## 🤖 AI Product Simplification

- Scan a product using the mobile camera.
- Extract product information using OCR.
- Allow users to provide additional product details if needed.
- Search reliable online sources for product information.
- Generate an AI-powered simplified explanation of:
  - Product purpose
  - Usage instructions
  - Benefits
  - Warnings
  - Side effects (if applicable)
  - Storage instructions

---

## 📷 Product Recognition

- Camera-based product scanning.
- OCR for reading product labels.
- Manual product description input.
- Support for multiple product categories.

Examples:

- Medicines
- Food products
- Cosmetics
- Electronics
- Household products

---

## 🌐 Intelligent Web Search

The backend gathers product information from trusted online sources before sending the data to the AI model for summarization.

---

## 🔔 Expiry Date Reminder

Users can:

- Save product expiry dates
- Receive reminder notifications before expiration
- View upcoming expiries

---

## 💊 Medicine Reminder

For medicines, users can:

- Set dosage schedules
- Configure reminder notifications
- Track medication timing

---

## 📜 Product History

Users can revisit previously scanned products without scanning them again.

---

## 📱 Mobile First

ScanWise is designed primarily as a mobile application using React Native and Expo.

---

# 🏗️ Tech Stack

## Mobile

- React Native
- Expo
- TypeScript

## Backend

- Node.js
- Express.js
- TypeScript

## AI Service

- Python
- FastAPI

## Database

(To be finalized)

Possible options:

- PostgreSQL
- MongoDB

## AI

(To be finalized)

Possible options:

- OpenAI API
- Gemini API
- Local LLM

---

# 📂 Repository Structure

```text
ScanWise/
├── apps
│   └── backend
|   └── mobile
│
├── docs
├── lint-staged.config.mjs
typescript-eslint
├── package.json
├── packages
│   ├── eslint-config
│   │   ├── base.js
│   │   ├── next.js
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── react.js
│   │   └── README.md
│   ├── typescript-config
│   │   ├── base.json
│   │   ├── nextjs.json
│   │   ├── node.json
│   │   ├── package.json
│   │   ├── react-library.json
│   │   └── react-native.json
│   └── ui
│       ├── eslint.config.mjs
│       ├── node_modules
│       ├── package.json
│       ├── src
│       └── tsconfig.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── scripts
├── services
└── turbo.json
```

---

# 👨‍💻 Team Members

<!-- jo lay documentation padcha tesko name aauha hai ta guyz  -->

-please write your names

- Ashim Gautam
  <!-- - Madan Bhandari -->
  <!-- - Nishan Bhandari -->
  <!-- - Nishant Bhattarai -->

---

# 📋 Prerequisites

Install the following software before running the project.

## Node.js

Recommended Version:

```text
v24.x LTS (or the latest stable version agreed upon by the team)
```

Check:

```bash
node -v
```

---

## pnpm

Recommended Version:

```text
11.9.0
```

Check:

```bash
pnpm -v
```

---

## Git

```bash
git --version
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone <repository-url>
```

---

## Move into the project

```bash
cd ScanWise
```

---

## Install dependencies

```bash
pnpm install
```

---

## Run development

```bash
pnpm dev
```

---

## Build project

```bash
pnpm build
```

---

## Run lint

```bash
pnpm lint
```

---

## Check TypeScript

```bash
pnpm check-types
```

---

## Format code

```bash
pnpm format
```

---

# 🛠 Development Workflow

1. Create a new branch.

```bash
git checkout -b feature/feature-name
```

2. Make your changes.

3. Stage the files.

```bash
git add .
```

4. Commit.

```bash
git commit -m "feat: add product scanning"
```

5. Push your branch.

```bash
git push origin feature/feature-name
```

6. Create a Pull Request.

> **Do not push directly to the `main` branch.** All changes should go through a Pull Request and code review.

---

# 🧹 Code Quality

This project uses:

- Turborepo
- ESLint
- Prettier
- Husky
- lint-staged
- TypeScript

All staged files are automatically checked before each commit.

---

# 📌 Project Status

Current Phase:

- ✅ Repository initialized
- ✅ Turborepo configured
- ✅ pnpm workspace configured
- ✅ ESLint configured
- ✅ Prettier configured
- ✅ Husky configured
- ✅ lint-staged configured
- ✅ Shared TypeScript configuration
- ⏳ Mobile application setup
- ⏳ Backend setup
- ⏳ AI service setup
- ⏳ Database integration
- ⏳ Docker configuration

---

# 📄 License

This project is developed as a Final Year Project for the Bachelor of Computer Applications (BCA) program.
