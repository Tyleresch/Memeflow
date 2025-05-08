# MemeFlow (Solana Breakout Hackathon)

### What’s in here
| Folder                                      | Description                              |
|---------------------------------------------|------------------------------------------|
| `web/memeflow_frontend/app`                 | Next.js 14 App Router pages & layouts    |
| `web/memeflow_frontend/components`          | Reusable UI components                   |
| `web/memeflow_frontend/lib`                 | Helper utilities & API clients           |
| `web/memeflow_frontend/prisma`              | Prisma schema & SQLite migrations        |
| `web/memeflow_frontend/public`              | Static assets (images, fonts, etc.)      |
| `web/memeflow_frontend/.env.example`        | Sample environment variables             |
| `web/memeflow_frontend/next.config.ts`      | Next.js configuration                    |
| `web/memeflow_frontend/tailwind.config.js`  | Tailwind CSS configuration                |

### Secrets
* **Wallet private key** → `~/.config/solana/id.json` (never committed)  
* **12-word seed phrase** → store offline (password manager or paper)  
* **Env vars** → `web/memeflow_frontend/.env.local` (git-ignored)

### One-time setup

```bash
# 1. Clone repo and navigate to frontend
git clone https://github.com/tyleresch/memeflow.git
cd memeflow/web/memeflow_frontend

# 2. Install dependencies
yarn install

# 3. Copy & configure environment file
cp .env.example .env.local
# Edit .env.local with your:
#   NEXT_PUBLIC_SOLANA_RPC_URL
#   NEXT_PUBLIC_PROGRAM_ID
#   DATABASE_URL

# 4. Prisma setup
npx prisma generate
npx prisma migrate dev

# 5. Run dev server
yarn dev
# Open http://localhost:3000 to view

# 6. Build for production
yarn build
yarn start
