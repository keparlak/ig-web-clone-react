import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { logout } from "../firebase";

function Header() {
  return (
    <header className="flex flex-col bg-white border-r border-gray-300 px-3 pt-2 pb-5">
      {/* <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img
            className="h-[29px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          />
        </Link>

        <Search />

        <nav>
          <button onClick={logout}>Logout</button>
        </nav>
      </div> */}

      {/* LOGO */}
      <div className="px-3 pt-[25px] mb-[19px]">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt="Instagram"
          className="h-7"
        />
      </div>
      {/* NAVBAR */}
      <div className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="#" className="flex items-center">
              <span className="mr-2">
                <i className="far fa-user-circle" />
              </span>
              <span>Profile</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="flex items-center">
              <span className="mr-2">
                <i className="far fa-plus-square" />
              </span>
              <span>New Post</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="#" className="flex items-center">
              <span className="mr-2">
                <i className="far fa-heart" />
              </span>
              <span>Activity</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="flex items-center">
              <span className="mr-2">
                <i className="far fa-comments" />
              </span>
              <span>Messages</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* MORE DROPDOWN */}
      <div className="fixed bottom-0">
        <button onClick={logout}>Logout</button>
        <button>MORE</button>
      </div>
    </header>
  );
}

export default Header;
