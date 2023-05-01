import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../firebase";

function Navbar() {
  return (
    <header className="flex flex-col px-3 pt-2 pb-5">
      {/* LOGO */}
      <div className="px-3 pt-[25px] mb-[19px]">
        <img
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          alt="Instagram"
          className="h-7"
        />
      </div>
      {/* NAVBAR */}
      <div className="">
        <ul>
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-user-circle" />
              </span>
              <span>Ana Sayfa</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-plus-square" />
              </span>
              <span>Ara</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-heart" />
              </span>
              <span>Keşfet</span>
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-comments" />
              </span>
              <span>Reels</span>
            </NavLink>
          </li>
          
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-comments" />
              </span>
              <span>Mesajlar</span>
            </NavLink>
          </li>          
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-comments" />
              </span>
              <span>Bildirimler</span>
            </NavLink>
          </li>          
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-comments" />
              </span>
              <span>Oluştur</span>
            </NavLink>
          </li>          
          <li className="mb-4">
            <NavLink exact activeClassName="font-bold" to="/" className="flex items-center active:font-bold p-3 hover:bg-black/5 rounded-md">
              <span className="mr-2">
                <i className="far fa-comments" />
              </span>
              <span>Profil</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* MORE DROPDOWN */}
      <div className="flex flex-col fixed bottom-0">
        <button onClick={logout}>Logout</button>
        <button>MORE</button>
      </div>
    </header>
  );
}

export default Navbar;
