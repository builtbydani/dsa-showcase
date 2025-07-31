// src/components/Common/DescriptionBox.jsx
export default function DescriptionBox({ title = "How It Works", children }) {
  return (
    <div 
      className="
        bg-white/60 backdrop-blur-xl 
        border border-gray-300 rounded-2xl 
        shadow-md p-6 mt-10 max-w-4xl mx-auto
      ">
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

