# 🌿 Punam Henna Atelier - Luxury Bridal Portfolio

A premium, cinematic, and responsive static website built for **Punam Henna Atelier** (Punam Umesh Mundada). Designed with a modern royal burgundy and champagne gold palette, smooth scroll animations, custom cursor sparkles, a before-after stain slider, and an integrated offline reservation registry dashboard.

---

## 📁 File Structure

The project has a completely flat, optimized file structure, making it 100% serverless, fast, and simple to understand:

```text
punam-mehendi/
├── index.html     # Semantic structure, Tailwind styling, and Google Fonts
├── app.js         # Interactive sparkles, GSAP stats count-ups, and Admin Hub
├── mandala.js     # Three.js 3D rotating gold mandala backdrop canvas
├── .gitignore     # Git ignore rules
└── README.md      # Deployment and project guidelines (This file)
```

---

## ⚜️ Deployment Guide

Since this website consists of pure static files, it can be deployed to **Vercel** or **GitHub Pages** in under two minutes with zero build configurations required.

### 🚀 Option A: Deploy on Vercel (Recommended)
Vercel recognizes flat static directories automatically and deploys them instantly.

1. **Push your code to a GitHub Repository** (see GitHub guide below).
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **Add New** -> **Project**.
4. Select the `punam-mehendi` repository from your list and click **Import**.
5. Keep all default configurations (Vercel automatically detects it as a static project; do **not** configure any build steps or commands).
6. Click **Deploy**! In seconds, you will receive a public, secure `https://punam-mehendi.vercel.app` domain.

---

### 🐙 Option B: Deploy on GitHub & GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new public repository named `punam-mehendi`.
   - Do *not* initialize it with a README or gitignore (we already have them).

2. **Initialize Git & Push Locally**:
   Open your terminal (PowerShell or Git Bash) inside the project folder (`punam-mehendi`) and run:
   ```bash
   git init
   git add .
   git commit -m "Initialize Punam Henna Atelier standalone static website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/punam-mehendi.git
   git push -u origin main
   ```
   *(Replace `YOUR_USERNAME` with your actual GitHub username)*.

3. **Enable GitHub Pages**:
   - In your GitHub repository page, click the **Settings** tab.
   - Scroll down to the **Pages** menu on the left sidebar.
   - Under **Build and deployment**, set the source to **Deploy from a branch**.
   - Under **Branch**, select **`main`** and **`/ (root)`**, then click **Save**.
   - Your site will be published at `https://YOUR_USERNAME.github.io/punam-mehendi/` within a minute!

---

## 🔑 Administrative Details

- **Admin Hub Passcode**: **`punam@9420`**
- **Dashboard Features**:
  - Live statistics for bookings (Total, Pending, Approved, Completed).
  - Searchable client registry database.
  - One-click client notification pre-formatting via WhatsApp.
  - **Dynamic Link Synchronization**: When a client submits a booking request, the WhatsApp message they send you contains an **Admin Quick Log Link**. Simply click this link in the message to automatically import their reservation directly into your laptop/phone's dashboard database!
