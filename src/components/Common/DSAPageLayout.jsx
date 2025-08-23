import { Link } from "react-router-dom";
import GlowCard from "./GlowCard";
import GlowTitle from "./GlowTitle";

export default function DSAPageLayout({ title, children }) {
  return (
    <div className="min-h-screen p-8 bg-slate-500 font-mono">
      <Link to="/" className="text-white underline mb-6 block">← Back</Link>
      <GlowCard>
        <GlowTitle>{title}</GlowTitle>
        {children}
      </GlowCard>
    </div>
  );
}

