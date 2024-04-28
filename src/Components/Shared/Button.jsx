const Button = ({title}) => {
  return (
    <button className=" min-w-16  rounded-lg bg-Logo px-5 py-1.5 text-center font-semibold text-Bg tracking-tight hover:bg-Logo/90 transition-colors ease-in-out duration-300">
      {title}
    </button>
  );
};
export default Button;
