# react-vite-electron

This project provides a minimal setup to integrate React with Vite and Electron.js, enabling a fast development experience with Hot Module Replacement (HMR) and ESLint rules.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Electron.js**: A framework for building cross-platform desktop applications using web technologies.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ollama-ui
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server and Electron application simultaneously, run:

```bash
npm start
```

This command will launch the Vite development server and the Electron application.

### Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will generate the necessary files in the `dist` directory.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Official Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## License

This project is licensed under the MIT License.
