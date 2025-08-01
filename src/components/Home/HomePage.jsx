import TitleCards from "./TitleCards";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 drop-shadow-sm">
        📘 DSA Showcase
      </h1>
      <TitleCards />
    </div>
  );
}
