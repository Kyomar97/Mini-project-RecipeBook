import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-60 bg-gray-800 text-white p-4">
    <ul>
      <li className="mb-2">
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:underline">
          About
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
