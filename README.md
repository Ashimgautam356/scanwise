# Agentica

> **Agentica** is an AI-native e-commerce platform that integrates Large Language Models (LLMs) with an online shopping system through the **Model Context Protocol (MCP)**. It enables users to interact with an intelligent shopping assistant capable of discovering products, comparing options, managing carts, and performing shopping-related tasks through natural conversation.

---

# 📖 Project Description

Traditional e-commerce platforms require users to manually browse products, apply filters, compare items, and complete purchases through multiple screens.

Agentica reimagines this experience by introducing an AI-powered shopping assistant capable of understanding natural language and securely interacting with the e-commerce system through the **Model Context Protocol (MCP)**.

Instead of navigating complex interfaces, users can simply describe what they are looking for, and the AI assistant can search products, explain recommendations, manage shopping carts, and perform various shopping tasks while respecting authentication and authorization rules.

The primary objective of this project is to explore how AI agents can safely interact with real-world software systems using MCP, rather than building another traditional e-commerce application.

---

# ✨ Features

## 🤖 AI Shopping Assistant

- Natural language conversations
- Product recommendations
- Product comparison
- Personalized shopping assistance
- Context-aware responses

---

## 🛍 Product Management

- Browse products
- Search products
- Product categories
- Product details
- Product reviews

---

## 🛒 Shopping Cart

- Add products to cart
- Remove products
- Update quantities
- View cart summary

---

## 📦 Order Management

- Place orders
- View order history
- Order notifications

---

## 🔐 Authentication & Authorization

- Secure user authentication
- Role-based authorization
- Protected AI actions
- JWT authentication

---

## 🧠 Model Context Protocol (MCP)

- MCP Server implementation
- AI Tool Calling
- Product search tools
- Cart management tools
- Order management tools
- Secure backend integration

---

# 🏗️ Tech Stack

## Frontend

- React
- Next.js
- TypeScript

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Prisma ORM

## AI Service

- Python
- FastAPI

## AI Integration

- OpenAI API (initial implementation)
- Model Context Protocol (MCP)

## Infrastructure

- pnpm

---

# 📂 Repository Structure

```text
Agentica/
├── app
│   ├── web
│   ├── admin
│   └── README.md
│
├── backend
│   ├── express
│   ├── ai
│   │   ├── ai-agents
│   │   └── llms-service
│
├── docs
├── scripts
├── .github
│
├── README.md
└── LICENSE
```

---

# 👨‍💻 Team Members

- Ashim Gautam
- Madan Bhandari
- Nishan Bhandari
- Nishant Bhattarai

---

# 📋 Prerequisites

Install the following software before running the project.

## Node.js

**Version**

```text
24.18.0
```

Check:

```bash
node -v
```

---

## pnpm

**Version**

```text
11.9.0
```

Check:

```bash
pnpm -v
```

---

## Python

**Version**

```text
Python 3.11+
```

Check:

```bash
python3 --version
```

---

## uv

Install:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Reload shell:

```bash
source ~/.bashrc
```

Verify:

```bash
uv --version
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
cd Agentica
```

---

## Install JavaScript dependencies

```bash
cd app/web

pnpm install

cd ../admin

pnpm install

cd ../../backend/express

pnpm install
```

---

## Install Python dependencies

```bash
cd backend/ai/llms-service

uv sync

cd ../../..
```

---

## Run without Docker

Web

```bash
cd app/web

pnpm dev
```

Admin

```bash
cd app/admin

pnpm dev
```

Express API

```bash
cd backend/express

pnpm dev
```

AI Service

```bash
cd backend/ai/llms-service

uv run main.py
```

---

## Build

```bash
pnpm build
```

---

## Lint

```bash
pnpm lint
```

---

## Type Checking

```bash
pnpm check-types
```

---

## Formatting

```bash
pnpm format
```

---

## Pre-commit Checks

Git commits run the Husky pre-commit hook at `.husky/pre-commit`.

If hooks are not active on a fresh clone, run:

```bash
pnpm prepare
```

It calls:

```bash
pnpm verify
```

That orchestrates checks inside each project:

- `app/web`: Prettier check, ESLint, TypeScript
- `app/admin`: Prettier check, ESLint, TypeScript
- `backend/express`: Prettier check, ESLint, TypeScript
- `backend/ai/llms-service`: Ruff and Black check

Run the same checks manually with:

```bash
pnpm verify
```

---

# 🛠 Development Workflow

1. Create a new branch.

```bash
git checkout -b feature/feature-name
```

2. Implement your changes.

3. Stage files.

```bash
git add .
```

4. Commit.

```bash
git commit -m "feat: add feature"
```

5. Push your branch.

```bash
git push origin feature/feature-name
```

6. Open a Pull Request.

> Do not push directly to the **main** branch.

---

# 🧹 Code Quality

The project uses:

- ESLint
- Prettier
- lint-staged
- TypeScript
- Ruff
- Black

Frontend tooling lives under each app in `app/`. Express tooling lives under `backend/express`, and AI tooling lives under `backend/ai`.

---

# 📌 Current Progress

- ✅ Repository initialized
- ✅ pnpm workspace configured
- ✅ ESLint configured
- ✅ Prettier configured
- ✅ Husky configured
- ✅ lint-staged configured
- ✅ Shared TypeScript configuration
- ⏳ Frontend development
- ⏳ Backend development
- ⏳ PostgreSQL integration
- ⏳ Prisma ORM setup
- ⏳ MCP Server implementation
- ⏳ AI Service development
- ⏳ Docker environment
- ⏳ Authentication
- ⏳ AI shopping assistant

---

# 🎯 Project Goals

- Build an AI-native e-commerce platform.
- Learn and implement Model Context Protocol (MCP).
- Integrate LLMs with real-world software systems.
- Design scalable backend architecture.
- Develop secure AI-powered workflows.
- Explore AI agent development and tool calling.

---

# 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for more information.
