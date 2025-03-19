import { app, BrowserWindow, ipcMain } from "electron";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const preloadPath = join(__dirname, "preload.js");
  console.log("Attempting to load preload script from:", preloadPath);

  const win = new BrowserWindow({
    width: 1000,
    height: 720,
    backgroundColor: "#F8F8F8",
    title: "Ollama UI",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#F8F8F8", // Background color of the title bar
      symbolColor: "#6D6D6D", // Color of the window controls (minimize, maximize, close)
      height: 30, // Height of the title bar
    },
    center: true,
    roundedCorners: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadPath,
    },
  });

  if (app.isPackaged) {
    win.loadFile(join(__dirname, "../../dist/index.html")); // Adjusted for src/backend/
  } else {
    win.loadURL("http://localhost:5173"); // Vite dev server
    //win.webContents.openDevTools(); // Optional: Open DevTools for debugging
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Handle IPC messages from renderer
ipcMain.on("ping", (event, msg) => {
  console.log("Main process received:", msg); // Should log "Hello from the renderer!"
});
