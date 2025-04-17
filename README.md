# Community‑Treasury (Solana Breakout Hackathon)

### What’s in here
| Folder | Description |
|--------|-------------|
| `anchor/treasury` | Anchor smart‑contract (Rust) |
| `web/community-treasury` | Next.js 14 front‑end (App Router) |
| `web/community-treasury/prisma` | SQLite schema + migrations |

### Secrets
* **Wallet private key** → `~/.config/solana/id.json` (never committed)  
* **12‑word seed phrase** → store offline (password manager or paper)  
* **Env vars** → `web/community-treasury/.env` (git‑ignored)

### One‑time setup

```bash
# Rust toolchain compatible with Anchor (v3 lockfile)
rustup override set 1.78.0

# build & deploy program
cd anchor/treasury
cargo generate-lockfile
anchor build
anchor deploy    # save the Program Id

# front‑end
cd ../../web/community-treasury
cp .env.example .env        # then edit with your Program Id
npm install
npx prisma migrate dev
npm run dev
