import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { RiLogoutCircleFill } from "react-icons/ri";
import { AiTwotoneProject } from "react-icons/ai";
import { FaTruckArrowRight } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 flex flex-col">
      <nav className="mt-10 flex-grow ml-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded hover:bg-red-700 hover:text-white ${isActive ? 'border-s-4	border-red-500' : ''}`
          }
        >
          <FaTruckArrowRight className="h-5 w-5 inline-block mr-2 font-bold" /> MY MOVES
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded hover:bg-red-700 hover:text-white ${isActive ? 'border-s-4	border-red-500 ' : ''}`
          }
        >
          <FaUser className="h-5 w-5 inline-block mr-2 font-bold" /> MY PROFILE
        </NavLink>
        <NavLink
          to="/quote"
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded hover:bg-red-700 hover:text-white ${isActive ? 'border-s-4	border-red-500' : ''}`
          }
        >
          <AiTwotoneProject className="h-5 w-5 inline-block mr-2 font-bold" /> GET QUOTE
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `block py-2.5 px-4 rounded hover:bg-red-700 hover:text-white ${isActive ? 'border-s-4	border-red-500' : ''}`
          }
        >
          <RiLogoutCircleFill className="h-5 w-5 inline-block mr-2 font-bold" /> LOGOUT
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
