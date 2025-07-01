import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Util/useOnlineStatus";
const Header = () => {
  const [btnchange, setBtnChange] = useState("login");
  const isOnline = useOnlineStatus();
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="w-24">
        <img
          src="https://png.pngtree.com/template/20191120/ourmid/pngtree-red-chilli-food-logo-design-your-company-image_334205.jpg"
          alt="logo"
          className="w-full h-auto rounded-md"
        />
      </h1>

      <div className="pl-20">
        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li>Page: {isOnline ? "online🟢" : "offline🔴"}</li>
          <li>
            <a href="/" className="hover:text-red-500 transition">
              Home
            </a>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-500 transition">
              About
            </Link>
          </li>
          <li className="hover:text-red-500 transition cursor-pointer">
            Contact
          </li>
          <li className="hover:text-red-500 transition cursor-pointer">Cart</li>
          <li>
            <button
              className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() =>
                btnchange === "login"
                  ? setBtnChange("logout")
                  : setBtnChange("login")
              }
            >
              {btnchange}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
