import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer({ className }) {
  return (
    <footer
      className={`border-2 border-b-0 border-Border rounded-t-3xl w-[80%] p-3 flex flex-col items-center justify-center space-y-5 cursor-pointer ${className}`}
    >
      <Link to="/" className="text-Logo text-4xl font-extrabold !mb-5 !mt-3">
        StackFrontend
      </Link>
      <h2 className="text-white text-xl">
        Showcasing Our FrontendComponents For You
      </h2>
      <div className="flex gap-2 items-center justify-center">
        <hr className="w-52  rounded-sm" />{" "}
        <FaXmark className="text-Logo text-3xl" />
        <hr className="w-52 rounded-sm" />
      </div>
      <p className="text-white text-base">
        copywrite ©2024{" "}
        <Link to="/" className="text-Logo">
          StackFrontend
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
