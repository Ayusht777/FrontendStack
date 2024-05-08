const Button = ({ title, background_color = "Logo", text_color = "Bg" }) => {
  return (
    <button
      className={` my-4 min-w-16 rounded-lg   px-5 py-1.5 text-center font-semibold tracking-tight  transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  ${`bg-` + background_color} ${`text-` + text_color} ${`hover:bg-` + background_color + `/90`} ${`focus:outline-` + background_color} `}
    >
      {title}
    </button>
  );
};
export default Button;
