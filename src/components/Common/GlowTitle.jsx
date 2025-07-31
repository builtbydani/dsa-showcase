// src/components/Common/GlowTitle.jsx
export default function GlowTitle({ children }) {
  return (
    <h1 className="text-4xl font-bold mb-4 text-gray-800 drop-shadow">
      {children}
    </h1>
  );
}

