import Test from "@/Components/Test";

export const componentsData = [
  {
    id: "01",
    name: "Navbar",
    category: "Basic",
    author: "Ayush",
    codeLanguage: "Jsx",
    dateCreated: "2024-04-09",
    code: `
    import BrandLogo from "@/Assets/BrandLogo.svg";
    import { useState } from "react";
    import { Link } from "react-router-dom";
    
    const Navbar = () => {
      const [isActive, setIsActive] = useState(false);
    
      const routeItems = [
        { routeId: 0, routeName: "Home", routePath: "/" },
        { routeId: 1, routeName: "Gallery", routePath: "/gallery" },
        { routeId: 2, routeName: "About", routePath: "/about" },
        { routeId: 3, routeName: "FAQ", routePath: "/faq" },
      ];
    
      return (
        <header className="w-4/5 bg-Nav mt-8 rounded-lg border-2 border-Border md:px-8 flex items-center justify-center relative">
          <nav className="flex h-10 w-full items-center justify-between gap-x-2 px-4">
            <img
              src={BrandLogo}
              alt="FrontendStackLogo"
              className="size-7 cursor-pointer"
            />
            <ul className="sm:flex w-full justify-end gap-x-12 hidden overflow-hidden">
              {routeItems.map((item) => (
                <li key={item.routeId} className="cursor-pointer text-white">
                  {/* <Link to={item.routePath}>{item.routeName}</Link> */}
                  <a href={item.routePath}>{item.routeName}</a>
                </li>
              ))}
            </ul>
            <button
              className="flex items-center flex-col w-6 md:hidden gap-y-1.5 relative"
              onClick={() => setIsActive(!isActive)}
            >
              <span
                className={
                  "block h-0.5 w-6 rounded-md transition-transform ease-in-out duration-300 " +
                  (isActive ? "rotate-45 absolute bg-gray-500 " : "bg-Logo")
                }
              ></span>
              <span
                className={
                  "block h-0.5 w-6 rounded-md transition-transform ease-in-out duration-300 " +
                  (isActive ? "-rotate-45 absolute bg-gray-500 " : "bg-Logo")
                }
              ></span>
            </button>
          </nav>
          {/* Add transition classes to the div */}
          {isActive && (
            <div className="md:hidden absolute w-full top-14 bg-Nav rounded-lg border-2 border-Border flex items-center flex-col justify-center py-4 ">
              <ul className="flex w-full justify-center items-center space-y-6 flex-col">
                {routeItems.map((item) => (
                  <li
                    key={item.routeId}
                    className="font-medium text-3xl text-white cursor-pointer"
                  >
                    {/* <Link to={item.routePath}>{item.routeName}</Link> */}
                    <a href={item.routePath}>{item.routeName}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>
      );
    };
    
    export default Navbar;
    
    `,
    renderedComponent: Test,
  },
];
