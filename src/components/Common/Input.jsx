// src/components/Common/Input.jsx
export default function Input({ value, onChange, placeholder = "", type = "text", className = "" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 h-11 rounded-md border border-gray-300 ${className}`}
    />
  );
}

