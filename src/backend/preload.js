import { contextBridge, ipcRenderer } from "electron";

// include prelod.js dest in main.js to be recognized by electron
contextBridge.exposeInMainWorld("myAPI", {
  ping: message => ipcRenderer.send("ping", message),
});
