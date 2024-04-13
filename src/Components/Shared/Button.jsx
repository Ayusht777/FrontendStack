const Button = ({ label = "Label", width = "w-48", bgColor = "Logo" }) => {
  return (
    <button
      className={`h-12  rounded-lg text-Bg font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        `focus-visible:outline-` + bgColor
      } ${width} ${`bg-` + bgColor}`}
    >
      {label}
    </button>
  );
};

export default Button;
