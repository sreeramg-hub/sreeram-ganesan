# Deployment Guide — Sreeram Ganesan Personal Website

## One-time Setup (do this once)

### 1. Install dependencies
```bash
cd ~/Desktop/Workspace/Personal\ Website/sreeram-ganesan
pnpm install
```

### 2. Run locally
```bash
pnpm dev
# Open http://localhost:3000
```

### 3. Create GitHub repository
```bash
# In the project folder:
git init
git add .
git commit -m "feat: initial Next.js website"
git branch -M main

# Create repo on GitHub (using GitHub CLI):
gh repo create sreeram-ganesan --public --push --source=.

# OR go to github.com → New Repository → named "sreeram-ganesan" → push manually:
# git remote add origin https://github.com/YOUR_USERNAME/sreeram-ganesan.git
# git push -u origin main
```

### 4. Connect Vercel
1. Go to **vercel.com** → New Project
2. Import your `sreeram-ganesan` GitHub repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done! 🎉

Vercel automatically:
- Deploys `main` branch to production
- Creates preview URLs for every PR
- Enables Analytics (already wired in the code)

### 5. Add a domain (optional)
**Option A — Vercel Domains (~$20/year, easiest):**
- Vercel dashboard → Your project → Settings → Domains → Buy domain
- DNS is auto-configured, zero extra steps

**Option B — External registrar (Namecheap/Cloudflare, ~$8–10/year):**
- Buy domain on Namecheap or Cloudflare Registrar
- Vercel dashboard → Settings → Domains → Add `yourdomain.com`
- Copy the nameservers/CNAME records Vercel gives you → paste in registrar DNS settings
- Propagation: 5–30 minutes

---

## Daily Workflow (after setup)

```bash
# 1. Start a new feature
git checkout -b feature/add-project-writeups

# 2. Make changes (edit lib/data.ts for content, components for design)
pnpm dev   # preview at localhost:3000

# 3. Verify build is clean
pnpm build
pnpm lint

# 4. Commit and push
git add .
git commit -m "feat: add project write-ups for Aspen and Peapod"
git push origin feature/add-project-writeups

# 5. Open PR on GitHub → Vercel auto-posts a preview URL
# 6. Review preview → Approve PR → Merge to main → Auto-deploys to production ✅
```

---

## Managing with Claude Code

Open VS Code terminal in the project folder and run:
```bash
claude
```

Claude Code has full context of this project via `CLAUDE.md`.
Example prompts:
- "Add my Aspen Dental project write-up to the projects section"
- "Change the hero tagline to..."
- "Add a new Lab page called Design Systems"
- "Fix the mobile nav menu"
