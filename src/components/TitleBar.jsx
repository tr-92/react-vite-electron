const height = 30;
export default function TitleBar() {
  return (
    <div className="w-full fixed top-0 flex items-center justify-center" style={{ "-webkit-app-region": "drag", height }}>
      <p className="text-sm font-mono text-gray-500">title bar</p>
    </div>
  );
}
