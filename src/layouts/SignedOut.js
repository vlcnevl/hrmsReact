import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/actions/userActions";
import { useSelector } from "react-redux";



export default function SignedOut({employer}) {
  const [clicked, setClicked] = useState(false);
  const userMail = useSelector((state) => state.user.userMail);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const dispatch = useDispatch();
  
  const handleClickSignOut=()=>{
      dispatch(logout())
  }

  

  return (
    <div className="ml-3 relative z-50 ">
      <div className="flex gap-4 items-center">
   
    { employer &&
           <Link to="/jobAdd">  <div className="items-center gap-x-8 text-white text-opacity-80 transition-all cursor-pointer hover:text-opacity-100 ">
           İlan Ver
             </div> </Link>
    }
    

        <button
          className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition  ease-in-out"
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
        
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div
            className="py-1 rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <div
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              role="menuitem"
            >
              {userMail}
            </div>
            <div
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              role="menuitem"
            >
              Settings
            </div>
            <div
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
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
