import { useEffect, useState } from "react";
import TitleBar from "./components/TitleBar";

function App() {
  const [appVersion, setAppVersion] = useState("...");

  useEffect(() => {
    const getAppVersion = async () => {
      const version = await window.electronAPI.getAppVersion();
      setAppVersion("v" + version);
    };
    getAppVersion();
  }, []);

  const ping = async () => {
    const response = await window.electronAPI.ping("Hello from the renderer!");
    console.log("Render process received:", response);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-3 font-mono items-center justify-center bg-bg backdrop-blur-xl">
      <TitleBar />
      <h1 className="text-3xl font-bold text-text">react-vite-electron 1.0</h1>
      <button className="px-4 py-2 bg-primary text-primary-muted cursor-pointer hover:bg-accent hover:text-white transition-colors rounded-full" onClick={ping}>
        IPC Test
      </button>

      <p className="text-text-muted bottom-0 fixed mb-4">
        create a production build with <b>npm run build</b>
        <br />
        app version: {appVersion}
      </p>
    </div>
  );
}

export default App;
