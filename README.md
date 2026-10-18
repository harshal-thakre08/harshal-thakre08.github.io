# Harshal Thakre — Personal Portfolio Website

A modern, responsive personal portfolio website for **Harshal Thakre**, a B.Tech Information Technology student and aspiring web developer. Built using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** without external frameworks or dependencies, optimized for hosting directly on **GitHub Pages**.

---

## 🌟 Overview

This portfolio showcases Harshal's web development projects, technical skills, services, and a professional, working contact system for potential freelance clients, recruiters, and small businesses. It features an elegant dark navy and charcoal theme with vibrant cyan and violet accents, thoughtful typography, smooth transitions, and high standards of web accessibility.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), structured document outline, accessible labels, ARIA landmarks, and live status regions.
- **CSS3**: Custom properties (CSS variables), modern Flexbox & CSS Grid, responsive media queries, glassmorphism backdrop filters, `:user-invalid` / `:user-valid` form states, and `@media (prefers-reduced-motion: reduce)`.
- **Vanilla JavaScript**: Pure ES6+ script with zero runtime dependencies. Handles mobile drawer navigation, active link tracking with `IntersectionObserver`, asynchronous `fetch()` API for form delivery, live input validation, and dynamic copyright year.
- **Formspree**: Secure, serverless form processing backend ideal for static sites hosted on GitHub Pages, protecting the owner's private email address from scrapers.
- **Inline SVG Icons**: High-contrast, scalable vector graphics bundled directly in HTML for fast load times and offline reliability.

---

## ✨ Features

1. **Responsive Header & Navigation**:
   - Fixed navigation with glassmorphism backdrop blur.
   - Smooth scrolling with offset padding for sticky header.
   - Accessible mobile hamburger menu with animated toggle icon and keyboard navigation support (`Escape` to close).
   - Dynamic active section highlighting as the user scrolls.

2. **Hero Section**:
   - Compelling introductory headline and value proposition.
   - Live project availability status badge with subtle breathing indicator.
   - Call-to-action buttons ("View My Projects" and "Contact Me").
   - Polished developer monogram card with stylized `HT` glyph, macOS window frame, and animated code preview.

3. **About Me**:
   - Honest, student-centered introduction detailing learning journey in Information Technology.
   - Focus areas: Responsive Web Design, Frontend Development, Small Business Websites, and Continuous Tooling.

4. **Skills Badges**:
   - Distinct cards for core technologies: **HTML5**, **CSS3**, **JavaScript**, **Git**, **GitHub**, and **Responsive Web Design**.
   - Custom SVG iconography and descriptive roles.

5. **What I Do (Services)**:
   - 3 clear offerings:
     1. Responsive Website Development
     2. Restaurant & Small Business Websites
     3. Website Layout & UI Improvements

6. **Featured Projects**:
   - Showcases **Spice Garden — Restaurant Website** with a custom CSS browser mockup.
   - Direct links to the live website and source code.
   - Reusable template markup included in `index.html` for effortlessly adding new projects in the future.

7. **Professional Working Contact System**:
   - **Fields**: Full Name, Email Address, Subject, and Message (all required).
   - **Client-Side Validation**: Immediate feedback on blur/input; RFC-compliant email checking; whitespace trimming.
   - **Loading State**: Animated spinner indicator, button disabled with `aria-busy="true"` to prevent accidental double-submits.
   - **Confirmed Delivery**: Displays a success banner only after Formspree confirms HTTP acceptance (HTTP 200). The form is cleared only on confirmed success.
   - **Resilient Error Handling**: Catches network failures and service errors, displaying clear recovery guidance while preserving all user-entered text so nothing is lost.
   - **Email Privacy**: Visitors contact Harshal through the site without exposing his private email address to scrapers and spambots.
   - **Setup Guard**: If submitted prior to inserting a real Formspree endpoint, displays a helpful setup reminder while preserving the user's message.

8. **Footer & Accessibility**:
   - Auto-updating copyright year via JavaScript.
   - Floating back-to-top button with smooth scroll.
   - Skip to main content link for screen reader and keyboard navigation.

---

## 📬 Connecting Your Formspree Endpoint (Setup Guide)

Because GitHub Pages hosts static files without a backend server, this portfolio is pre-configured to use **Formspree** as its contact service.

### Step 1: Create Your Free Formspree Account
1. Visit [https://formspree.io/](https://formspree.io/) and sign up for a free account.

### Step 2: Create a New Form & Verify Your Email
1. In your Formspree dashboard, click **"+ New Form"**.
2. Give your form a name (e.g., `Harshal Portfolio Contact`).
3. Enter your **private personal/professional email address** in the "Send emails to" field.
4. Check your inbox and click the **verification link** sent by Formspree so it has permission to forward messages to you.

### Connected Formspree Endpoint
Your portfolio contact form is connected to your active Formspree endpoint:
```
https://formspree.io/f/xnpjrgdg
```

This endpoint is configured in both:
1. **`script.js` (line 143):**
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpjrgdg';
   ```

2. **`index.html` (line 610):**
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/xnpjrgdg" method="POST" ...>
   ```

### 🔒 Email Privacy & Security
- **No Email Scraped**: Your real email address is stored securely inside your private Formspree account settings. It is **never** published in `index.html`, `script.js`, or the GitHub repository.
- **Spam Protection**: Formspree automatically filters automated bot submissions.
- **GDPR & Privacy Compliant**: Form submissions are used solely to forward visitor inquiries to your inbox.

---

## 🚀 Featured Project: Spice Garden

- **Project Name**: Spice Garden — Restaurant Website
- **Description**: A responsive restaurant website featuring a food menu, gallery, customer reviews, restaurant information, and a reservation interface.
- **Live Demo**: [https://harshal-thakre08.github.io/spice-garden/](https://harshal-thakre08.github.io/spice-garden/)
- **Source Code**: [https://github.com/harshal-thakre08/spice-garden](https://github.com/harshal-thakre08/spice-garden)

---

## 💻 How to Run Locally

Because this project is built entirely with vanilla web technologies, no build tools, bundlers, or package installations (`npm install`) are required.

### Method 1: Open Directly in Your Browser
Simply double-click `index.html` or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### Method 2: Using VS Code Live Server
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.

### Method 3: Using Python Built-in Server
Open PowerShell or your terminal in the project directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🌐 Deploying to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new public repository (e.g. `portfolio` or `harshal-thakre08.github.io`).

2. **Push the Files to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Update portfolio with working contact system"
   git branch -M main
   git remote add origin https://github.com/harshal-thakre08/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages** (under "Code and automation" in the left sidebar).
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Select `main` and folder `/ (root)`.
   - Click **Save**.
   - Within 1–2 minutes, GitHub will publish your portfolio at `https://harshal-thakre08.github.io/<YOUR-REPO-NAME>/`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
