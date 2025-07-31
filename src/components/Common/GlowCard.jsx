// src/components/Common/GlowCard.jsx
export default function GlowCard({ children }) {
  return (
    <div 
      className="
        bg-white/40 backdrop-blur-xl 
        border border-white rounded-2xl 
        shadow-xl p-6 mb-6 max-w-3xl mx-auto
      ">
      {children}
    </div>
  );
}

