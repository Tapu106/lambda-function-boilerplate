# Lambda Function Boilerplate ✅

A minimal Serverless + Node.js boilerplate for AWS Lambda using Express and `serverless-http`.

---

## 🔧 Features

- Express-based handlers
- Serverless Framework configuration (`serverless.dev.yml`, `serverless.prod.yml`)
- Local development with `serverless-offline`
- Environment variables via `dotenv` and `serverless-dotenv-plugin`

---

## ⚙️ Prerequisites

- Node.js (v20+ recommended)
- npm
- Serverless Framework CLI (optional for local development/deploy):

```bash
npm install -g serverless
```

> Tip: If you prefer not to install Serverless globally, the project uses `npx` in the scripts and will work without a global install.

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd lambda-function-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables

- Copy `.env.example` to `.env` (create if missing) and set values for your environment.
- The project uses `dotenv` and `serverless-dotenv-plugin` so env vars will be loaded for local dev and deployments.

Example:

```
# .env
PORT=3000
NODE_ENV=development
# Add any API keys or secrets you need
```

> Check `src/config/env.js` for how environment variables are loaded and used in the project.

---

## 🧪 Development

- Start development with automatic restart (uses `nodemon`):

```bash
npm run dev
```

- Run the project locally as a Serverless service (offline):

```bash
npm run dev:offline
```

This runs the Serverless Offline plugin configured by `serverless.dev.yml`.

---

## 📦 Deployment

- Deploy to the development stage (uses `serverless.dev.yml`):

```bash
npm run dev:deploy
```

- Deploy to production (uses `serverless.prod.yml`):

```bash
npm run prod:deploy
```

Note: These scripts call `npx sls deploy -c <config>` so you can run them without a global Serverless install.

---

## 🧩 Project Structure

```
package.json
serverless.dev.yml
serverless.prod.yml
src/
  app.js
  handler.js
  config/
    env.js
  controllers/
  lib/
  routes/
  services/
  utils/
```

- `handler.js` - Serverless handler entry
- `app.js` - Express app
- `src/config/env.js` - Environment variable loader

---

## ✅ Tips & Troubleshooting

- If you get port conflicts, change `PORT` in `.env` or in `src/config/env.js`.
- For Serverless AWS deployments, ensure your AWS credentials are configured (e.g., via `aws configure`).

---

## 🤝 Contributing

Contributions are welcome. Open an issue or submit a PR with a clear description.

---

## 📄 License

MIT
