const PageContainer = ({
  children,
  className = "",
  fluid = false,
}) => {
  return (
    <section
      className={`
        relative
        w-full

        ${
          fluid
            ? "px-4 py-5 sm:px-6 lg:px-8"
            : "mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 xl:px-10"
        }

        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default PageContainer;