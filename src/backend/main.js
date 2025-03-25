import { app, BrowserWindow, ipcMain, dialog } from "electron";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import pkg from "electron-updater";
const { autoUpdater } = pkg;

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const preloadPath = join(__dirname, "preload.js");
  console.log("Attempting to load preload script from:", preloadPath);

  const win = new BrowserWindow({
    width: 1000,
    height: 720,
    title: "My App",
    backgroundColor: "#0f1111",
    roundedCorners: true,
    titleBarStyle: "hidden",
    opacity: 1.0,
    titleBarOverlay: {
      color: "#0f1111", // Background color of the title bar
      symbolColor: "#454e50", // Color of the window controls (minimize, maximize, close)
      height: 30, // Height of the title bar
    },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadPath,
    },
    icon: join(__dirname, "../assets/icon.png"),
  });

  if (app.isPackaged) {
    win.loadFile(join(__dirname, "..", "..", "dist", "index.html")); // Adjusted for src/backend/
  } else {
    win.loadURL("http://localhost:5173"); // Vite dev server
    //win.webContents.openDevTools(); // Optional: Open DevTools for debugging
  }
}

app.on("ready", () => {
  createWindow();
  checkForUpdates();
});

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

// Expose version via IPC
ipcMain.handle("get-app-version", () => {
  return app.getVersion();
});

ipcMain.on("ping", () => {
  console.log("Hello from main!");
});

// Update logic (what happens when the user closes the app when a new update is downloading?)
function checkForUpdates() {
  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on("checking-for-update", () => {
    console.log("Checking for updates...");
  });

  autoUpdater.on("update-available", () => {
    dialog.showMessageBox({
      type: "info",
      title: "Update Available",
      message: "A new version is available. Downloading now...",
    });
  });

  autoUpdater.on("update-not-available", info => {
    console.log("No update available:", info.version);
  });

  autoUpdater.on("download-progress", progress => {
    console.log(`Download progress: ${progress.percent}%`);
  });

  autoUpdater.on("update-downloaded", info => {
    dialog
      .showMessageBox({
        type: "info",
        title: "Update Ready",
        message: "Update downloaded. Restart the app to apply it?",
        buttons: ["Restart", "Later"],
      })
      .then(response => {
        if (response.response === 0) {
          // User clicked "Restart"
          autoUpdater.quitAndInstall();
        }
      });
  });

  autoUpdater.on("error", err => {
    console.error("Update error:", err);
  });
}
