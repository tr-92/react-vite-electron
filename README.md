# React Vite Electron

A modern boilerplate integrating **React**, **Vite**, and **Electron.js**, designed for fast development with **Hot Module Replacement (HMR)**, **ESLint**, and **Tailwind CSS 4.0**.

---

## 🚀 Features

- **Fast Development** – Vite’s lightning-fast builds combined with Electron.
- **Hot Module Replacement (HMR)** – Instant updates without reloading.
- **Tailwind CSS 4.0** – Utility-first styling framework.
- **ESLint Integration** – Ensures clean and consistent code.
- **Optimized Production Build** – Bundles and optimizes for deployment.
- **Auto-Updater with Express Server** – Seamlessly updates via an integrated Express server hosting update files and the manifest YAML.

---

## 📌 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ereat/react-vite-electron.git
   cd react-vite-electron
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

To start the development server and launch the Electron app:

```bash
npm start
```

### Building for Production

Generate a production-ready build:

```bash
npm run build
```

The production files will be available in the `dist` directory.

### Auto-Updater & Express Server

This project includes an **auto-updater** powered by an **Express server** hosting the latest builds and manifest files.

Start the Express update server:

```bash
npm run update-server
```

Ensure `manifest.yml` and update files are properly hosted so Electron's auto-updater can fetch them.

---

## 🔮 Roadmap & Future Enhancements

- **Linux Support** – Expanding compatibility for Linux distributions.
- **Improved Packaging** – Optimizing build size and startup performance.

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a branch, make changes, and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
