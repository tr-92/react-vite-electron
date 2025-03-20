const { contextBridge, ipcRenderer } = require("electron");

// include prelod.js dest in main.js to be recognized by electron
contextBridge.exposeInMainWorld("electronAPI", {
  ping: message => ipcRenderer.send("ping", message),
});
