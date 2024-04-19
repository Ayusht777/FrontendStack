const Button = ({ className = "", type = "primary", children, ...props }) => {
  const types = {
    primary: "focus-visible:outline-Logo bg-Logo",
    secondary: "focus-visible:outline-Border bg-Border text-white",
  };
  return (
    <button
      className={`h-8 w-32 text-base md:h-10  md:w-48 md:text-lg  rounded-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4  ${types[type]}  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
