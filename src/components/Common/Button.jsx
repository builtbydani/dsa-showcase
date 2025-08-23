// src/components/Common/Button.jsx
const base = "h-11 px-4 rounded-lg font-medium transition-colors";
const variants = {
  pink: "bg-pink-400 hover:bg-pink-500 text-white",
  blue: "bg-blue-400 hover:bg-blue-500 text-white",
  green: "bg-green-400 hover:bg-green-500 text-white",
  red: "bg-red-400 hover:bg-red-500 text-white",
  gray: "bg-gray-300 hover:bg-gray-400 text-gray-800",
  yellow: "bg-yellow-400 hover:bg-yellow-500 text-white",
};

export default function Button({ children, variant = "gray", className = "", ...props }) {
  const style = `${base} ${variants[variant] || variants.gray} ${className}`;
  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
}

