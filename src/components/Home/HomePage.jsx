import TitleCards from "./TitleCards";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-500 font-mono">
      <h1 className="text-4xl font-bold text-center mb-12 py-6 text-gray-800 drop-shadow-sm">
        Data Structures / Algorithms: Visual Showcase
      </h1>
      <TitleCards />
    </div>
  );
}
