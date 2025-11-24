# Netlify Deployment Guide

This guide provides step-by-step instructions to deploy this React + Vite application to Netlify.

## Prerequisites

- Node.js (v20 or higher) installed
- npm or yarn package manager
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free tier works)

---

## Method 1: Deploy via Netlify CLI (Recommended for Testing)

### Step 1: Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Or use npx (no global installation needed)
npx netlify-cli --version
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate. Follow the prompts to complete login.

### Step 3: Initialize Netlify in Your Project

```bash
# Navigate to your project directory
cd /Users/aliaksandrshastakou/Projects/my-test-app-zustand

# Initialize Netlify (this will create a .netlify folder)
netlify init
```

**During initialization, you'll be prompted:**
- **Create & configure a new site?** → Choose "Yes" (or link to existing site)
- **Team:** → Select your team
- **Site name:** → Enter a name (or press Enter for auto-generated name)
- **Build command:** → Press Enter (uses `npm run build` from netlify.toml)
- **Directory to deploy:** → Press Enter (uses `dist` from netlify.toml)

### Step 4: Build and Deploy

```bash
# Build the project locally first (optional, to test)
npm run build

# Deploy to Netlify
netlify deploy

# For production deployment
netlify deploy --prod
```

### Step 5: Verify Deployment

After deployment, Netlify will provide you with:
- **Draft URL** (for `netlify deploy`)
- **Live URL** (for `netlify deploy --prod`)

Visit the URL to verify your app is working correctly.

---

## Method 2: Deploy via Netlify Dashboard (Recommended for Production)

### Step 1: Push Code to Git Repository

```bash
# Make sure all changes are committed
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

### Step 2: Connect Repository to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your repository: `my-test-app-zustand`

### Step 3: Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `20` (or latest)

### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Your site will be live at: `https://your-site-name.netlify.app`

### Step 5: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

---

## Method 3: Deploy via GitHub Actions (CI/CD)

### Step 1: Create GitHub Actions Workflow

Create `.github/workflows/netlify.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --dir=dist --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### Step 2: Get Netlify Tokens

```bash
# Get your site ID
netlify status

# Get your auth token
netlify auth:token
```

### Step 3: Add Secrets to GitHub

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Add:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify auth token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

---

## Configuration Files

### `netlify.toml`

This file is already created in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

**What it does:**
- Sets build command to `npm run build`
- Sets publish directory to `dist` (Vite's output)
- Redirects all routes to `index.html` (for React Router SPA routing)
- Sets Node.js version to 20

---

## Environment Variables (if needed)

If your app uses environment variables:

1. **Via Netlify Dashboard:**
   - Go to **Site settings** → **Environment variables**
   - Add your variables

2. **Via Netlify CLI:**
   ```bash
   netlify env:set VARIABLE_NAME "value"
   ```

3. **Via `netlify.toml`:**
   ```toml
   [build.environment]
     NODE_VERSION = "20"
     VITE_API_URL = "https://api.example.com"
   ```

---

## Troubleshooting

### Build Fails

1. **Check build logs:**
   ```bash
   netlify logs
   ```

2. **Test build locally:**
   ```bash
   npm run build
   ```

3. **Common issues:**
   - Missing dependencies → Run `npm install`
   - TypeScript errors → Fix linting issues
   - Path alias issues → Check `vite.config.ts` and `tsconfig.json`

### Routing Not Working

- Ensure `netlify.toml` has the redirect rule:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Assets Not Loading

- Check that `index.html` uses relative paths
- Verify `base` in `vite.config.ts` (should be `/` for Netlify)

---

## Quick Deploy Commands Reference

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize (first time only)
netlify init

# Deploy draft
netlify deploy

# Deploy production
netlify deploy --prod

# View site status
netlify status

# Open site dashboard
netlify open

# View build logs
netlify logs

# Update site settings
netlify site:update
```

---

## Post-Deployment Checklist

- [ ] Site loads correctly at the provided URL
- [ ] All routes work (test `/`, `/quiz`, `/results`)
- [ ] Images and assets load correctly
- [ ] i18n language switching works
- [ ] Zustand state persistence works
- [ ] Mobile responsive design works
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS is enabled (automatic on Netlify)

---

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Happy Deploying! 🚀**

