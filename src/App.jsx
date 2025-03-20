import TitleBar from "./components/TitleBar";

function App() {
  const ping = () => window.electronAPI.ping("Hello from the renderer!");
  return (
    <div className="w-full h-screen flex flex-col gap-3 font-mono items-center justify-center bg-background">
      <TitleBar />
      <h1 className="text-3xl font-bold">react-vite-electron 1.0</h1>
      <button className="px-4 py-2 bg-[rgb(0,0,255)] text-white cursor-pointer" onClick={ping}>
        IPC Test
      </button>

      <p className="text-gray-500 bottom-0 fixed mb-4">
        create a production build with <b>npm run build</b>
      </p>
    </div>
  );
}

export default App;
