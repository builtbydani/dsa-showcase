// src/components/Common/GlowPanel.jsx
export default function GlowPanel({ title, children, innerRef }) {
  return (
    <div
      ref={innerRef}
      className="
        bg-white/60 backdrop-blur-xl 
        border border-gray-200 rounded-2xl 
        shadow-lg p-4 mt-4 max-w-xl mx-auto
      ">
      {title && <h2 className="text-lg font-semibold mb-2 text-gray-700">{title}</h2>}
      <div>
        {children}
      </div>
    </div>
  );
}

