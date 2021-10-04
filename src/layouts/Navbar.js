import React, { useState } from "react";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SignedOut from "./SignedOut";

export default function Navbar() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
    // console.log(showOptions);
  };

  const state = useSelector((state) => state.user.userState);

 // console.log(state);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 lg:px-8 relative flex items-center justify-between h-16">
        <Link to="/">
          <div className="text-white font-bold transition-all text-opacity-80 hover:text-opacity-100 cursor-pointer ">
            HRMS
          </div>
        </Link>

        {!showOptions && state === false && (
          <nav className="flex gap-x-8 text-sm">
            <Link to="/login">
              <div className="flex items-center gap-x-2 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100 ">
                Giriş Yap
                <RiUserFill size={18} />
              </div>
            </Link>
            <div
              onClick={handleClick}
              className="flex items-center  gap-x-2 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100"
            >
              Kayıt Ol
              <RiUserAddFill size={18} />
            </div>
          </nav>
        )}

        {showOptions && state === false && (
          <nav className="flex gap-x-8 text-sm">
            <Link to="/registerEmployer">
              <div className="flex items-center gap-x-2 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100 ">
                İş Veren
                <RiUserAddFill size={18} />
              </div>
            </Link>
            <Link to="/registerCandidate">
              <div className="flex items-center  gap-x-2 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100">
                İş Arayan
                <RiUserAddFill size={18} />
              </div>
            </Link>
          </nav>
        )}

        {state === true && (
            <SignedOut/>
        )}
      </div>
    </nav>
  );
}
