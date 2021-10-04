import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/userActions";




export default function SignedOut() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const dispatch = useDispatch();
  
  const handleClickSignOut=()=>{
      dispatch(logout())
  }

  return (
    <div class="ml-3 relative">
      <div>
        <button
          class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition  ease-in-out"
          id="user-menu"
          aria-label="User menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <IconContext.Provider value={{ color: "white" }}>
            <CgProfile size={25} />
          </IconContext.Provider>
        </button>
      </div>
      {clicked && (
        <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div
            class="py-1 rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <div
              href="#"
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Your Profile
            </div>
            <div
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Settings
            </div>
            <div
              class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              role="menuitem"
              onClick={handleClickSignOut}
            >
              Sign out
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
