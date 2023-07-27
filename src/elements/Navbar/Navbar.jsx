import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isNotMobile, setNotMobile] = useState(window.innerWidth > 576);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateMobile = () => {
    setNotMobile(window.innerWidth > 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  });

  const isMenuOpen = () => {
    setMenuOpen(true);
  };

  const isMenuClosed = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {isNotMobile ? (
        <nav>
          <Link to="/">
            <img
              className="coffeeroasters-logoh"
              src="/assets/shared/desktop/logo.svg"
              alt="coffee bean icon"
            />
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/plan">Create Your Plan</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <nav className="nav-mobile">
            <Link to="/">
              <img
                className="coffeeroasters-logoh"
                src="src/assets/shared/desktop/logo.svg"
                alt="coffee bean icon"
              />
            </Link>
            {menuOpen ? (
              <svg
                onClick={isMenuClosed}
                width="14"
                height="13"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z"
                  fill="#333D4B"
                  fillRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                onClick={isMenuOpen}
                className="icon-hamburger"
                width="16"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z"
                  fill="#333D4B"
                  fillRule="evenodd"
                />
              </svg>
            )}
          </nav>

          {menuOpen ? (
            <nav className="nav-mobile-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/plan">Create Your Plan</Link>
                </li>
              </ul>
            </nav>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}
