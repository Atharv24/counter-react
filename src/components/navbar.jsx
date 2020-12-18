import React from "react";

export default function NavBar({ totalNumber }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">{totalNumber}</span>
      </a>
    </nav>
  );
}
