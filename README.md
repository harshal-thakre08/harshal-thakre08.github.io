# Harshal Thakre — Personal Portfolio Website

A modern, responsive personal portfolio website for **Harshal Thakre**, a B.Tech Information Technology student and aspiring web developer. Built using pure **HTML5**, **CSS3**, and **Vanilla JavaScript** without external frameworks or dependencies, optimized for hosting directly on **GitHub Pages**.

---

## 🌟 Overview

This portfolio showcases Harshal's web development projects, technical skills, and service offerings for potential freelance clients, recruiters, and small businesses. It features an elegant dark navy and charcoal theme with vibrant cyan and violet accents, thoughtful typography, smooth transitions, and high standards of web accessibility.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`), structured content outline, accessible labels, and ARIA landmarks.
- **CSS3**: Custom properties (CSS variables), modern Flexbox & CSS Grid, responsive media queries, glassmorphism backdrop filters, `:user-invalid` / `:user-valid` form states, and `@media (prefers-reduced-motion: reduce)`.
- **Vanilla JavaScript**: Pure ES6+ script with zero runtime dependencies. Handles mobile drawer navigation, active link tracking with `IntersectionObserver`, live input validation, clipboard integration, and static site notice dialog management.
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

7. **Contact & Form Validation**:
   - Client-side validation for required fields and RFC-compliant email formats.
   - Modern `:user-invalid` styling that only flags errors after user interaction.
   - Static hosting notice dialog (`<dialog closedby="any">`) explaining that GitHub Pages runs without a backend, providing a direct `mailto:` launcher and message copying helper.
   - Direct link to GitHub profile: [github.com/harshal-thakre08](https://github.com/harshal-thakre08).

8. **Footer & Accessibility**:
   - Auto-updating copyright year via JavaScript.
   - Floating back-to-top button with smooth scroll.
   - Skip to main content link for screen reader and keyboard navigation.

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
   git commit -m "Initial commit: Harshal Thakre Portfolio"
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

## ⚙️ Customization & Developer Guide

### 1. Adding Your Real Email Address
If you'd like the contact form's "Open in Email App" button to pre-address emails to you directly:
1. Open `script.js`.
2. Locate line 224:
   ```javascript
   dialogMailtoBtn.setAttribute('href', `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`);
   ```
3. Replace `mailto:?` with your email, e.g.:
   ```javascript
   dialogMailtoBtn.setAttribute('href', `mailto:yourname@example.com?subject=${mailtoSubject}&body=${mailtoBody}`);
   ```

### 2. Connecting Formspree or EmailJS (Optional Backend)
To have messages delivered directly to your inbox without a custom server:
1. Create a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID.
3. In `index.html`, update the `<form>` tag:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Adding More Projects
A reusable commented project card template is provided inside `index.html` in the `#projects` section. Copy and paste the template block to easily add future projects as you build them.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
