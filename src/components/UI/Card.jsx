const Card = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/20
        bg-white/70
        backdrop-blur-xl
        shadow-xl
        p-6
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-2xl"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;