const { contextBridge, ipcRenderer } = require("electron");

// include prelod.js dest in main.js to be recognized by electron
contextBridge.exposeInMainWorld("electronAPI", {
  ping: message => ipcRenderer.invoke("ping", message),
  getAppVersion: () => ipcRenderer.invoke("get-app-version"),
});
