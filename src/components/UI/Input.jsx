const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        w-full
        rounded-xl
        border
        border-gray-200
        bg-white/80
        backdrop-blur-lg
        px-4
        py-3
        outline-none
        transition
        focus:ring-2
        focus:ring-[#1A4D2E]
        ${className}
      `}
    />
  );
};

export default Input;