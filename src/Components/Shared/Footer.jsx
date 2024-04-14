import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Footer({ className }) {
  return (
    <footer
      className={`border-2 border-b-0 border-Border rounded-t-lg w-4/5 md:p-3 p-1 flex flex-col items-center justify-center md:space-y-5 space-y-2 cursor-pointer ${className}`}
    >
      <Link
        to="/"
        className="text-Logo md:text-4xl text-2xl font-bold !mb-5 !mt-3"
      >
        StackFrontend
      </Link>
      <h2 className="text-white md:text-xl   font-bold text-center">
        Showcasing Our FrontendComponents For You
      </h2>
      <div className="flex gap-2 items-center justify-center ">
        <hr className="md:w-52 w-24 rounded-sm" />
        <HiMiniXMark className="text-Logo text-4xl" />
        <hr className="md:w-52 w-24 rounded-sm" />
      </div>
      <p className="text-white md:text-base text-sm">
        copyright ©2024
        <Link to="/" className="text-Logo pl-1">
          StackFrontend
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
