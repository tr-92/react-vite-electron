export default function TitleBar() {
  return (
    <div className="w-full h-[30px] fixed top-0 flex items-center justify-center" style={{ "-webkit-app-region": "drag" }}>
      <p className="text-sm font-mono text-gray-500">title bar</p>
    </div>
  );
}
