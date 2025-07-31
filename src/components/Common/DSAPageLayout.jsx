import { Link } from "react-router-dom";
import GlowCard from "./GlowCard";
import GlowTitle from "./GlowTitle";

export default function DSAPageLayout({ title, children }) {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100">
      <Link to="/" className="text-indigo-500 underline mb-6 block">← Back</Link>
      <GlowCard>
        <GlowTitle>{title}</GlowTitle>
        {children}
      </GlowCard>
    </div>
  );
}

