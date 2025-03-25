import { useEffect, useState } from "react";
import TitleBar from "./components/TitleBar";

import imgUrl from "../public/icon.png";

function App() {
  const [appVersion, setAppVersion] = useState("...");

  useEffect(() => {
    const getAppVersion = async () => {
      const version = await window.electronAPI.getAppVersion();
      setAppVersion("v" + version);
    };
    getAppVersion();
  }, []);

  const ping = () => window.electronAPI.ping();

  return (
    <div className="w-full h-screen flex flex-col gap-4 font-mono items-center justify-center bg-bg backdrop-blur-xl">
      <TitleBar />

      <a href="https://github.com/ereat/react-vite-electron" target="_blank" rel="noreferrer" title="GitHub Repo">
        <img src={imgUrl} alt="icon" className="w-[64px] h-[64px] object-contain opacity-50 hover:opacity-100 cursor-pointer" />
      </a>
      <h1 className="text-3xl font-bold text-text">react-vite-electron</h1>
      <button
        className="border border-dawn px-3 py-2 bg-dawn-muted text-dawn font-bold cursor-pointer hover:bg-accent hover:text-white transition-colors rounded-xl"
        onClick={ping}
      >
        IPC Test
      </button>

      <div className="flex items-center justify-center bottom-0 fixed pb-4 gap-4 w-full">
        <p className="text-text-muted">
          create a production build with <b>npm run build</b>
        </p>
        <p className="text-text-muted">build: {appVersion}</p>
      </div>
    </div>
  );
}

export default App;
