export default {
  "*.{js,mjs,cjs,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"],
  "services/ai-service/**/*.py": [
    "services/ai-service/.venv/bin/ruff check --fix",
    "services/ai-service/.venv/bin/black",
  ],
};
