# Quick Deploy to Netlify

## Fastest Method (3 Commands)

```bash
# 1. Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# 2. Login to Netlify
netlify login

# 3. Deploy (first time - will initialize)
netlify init && netlify deploy --prod
```

## Already Initialized? Just Deploy

```bash
# Deploy to production
netlify deploy --prod

# Or deploy to draft URL (for testing)
netlify deploy
```

## Via Netlify Dashboard (No CLI)

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository
5. Click **"Deploy site"** (settings auto-detected from `netlify.toml`)

---

**That's it!** Your site will be live in ~2 minutes. 🚀

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

