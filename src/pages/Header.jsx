import { Link } from "react-router-dom";
import React from 'react';

function Header({ onShowModal }) {
  return (
    <header className="hd_wrap">
      <div className="hd mw">
        <h1>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
          </Link>
        </h1>
        <span>
          <img onClick={onShowModal} src={`${process.env.PUBLIC_URL}/img/search.svg`} alt="검색" />
        </span>
      </div>
    </header>
  );
}
export default Header;
