const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary:
      "bg-[#1A4D2E] hover:bg-[#245C39] text-white",

    secondary:
      "bg-[#F4A300] hover:bg-[#DA9200] text-black",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",

    outline:
      "border border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-5
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;