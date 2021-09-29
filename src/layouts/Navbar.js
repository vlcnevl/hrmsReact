import React from "react";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 relative flex items-center justify-between h-16">
        <div
          
          className="text-white font-bold transition-all text-opacity-80 hover:text-opacity-100 cursor-pointer "
        >
          HRMS
        </div>

        <nav className="flex gap-x-8 text-sm">
          <div className="flex items-center gap-x-2 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100 ">
            Giriş Yap
            <RiUserFill size={18} />
          </div>

          <Link to="/register">
            
            <div className="flex items-center  gap-x-2 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100">
              Kayıt Ol
              <RiUserAddFill size={18} />
            </div>
          </Link>
        </nav>
      </div>
    </nav>
  );
}
