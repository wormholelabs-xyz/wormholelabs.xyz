import React, { useEffect, useState } from "react";
import Logo from "../images/labs.inline.svg";
import MobileMenu from "./Mobilemenu";
import Link from "next/link";

export interface BurgerState {
  initial: boolean | null;
  opened: boolean | null;
}

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", ifSticky);
    return () => {
      window.removeEventListener("scroll", ifSticky);
    };
  });

  const ifSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? setIsSticky(true) : setIsSticky(false);
  };

  const [headerState, setHeaderState] = useState<BurgerState>({
    initial: false,
    opened: null,
  });

  // Toggle menu
  const handleToggleMenu = () => {
    if (headerState.initial === false) {
      setHeaderState({
        initial: null,
        opened: true,
      });
    } else {
      setHeaderState({
        ...headerState,
        opened: !headerState.opened,
      });
    }
  };

  return (
    <>
      <header
        className={` w-full px-3 md:px-8  fixed left-0 top-0 z-10 transition-all ${
          isSticky ? " pt-3 md:pt-4 " : " pt-3 md:pt-8"
        } `}
      >
        <div
          className={`bg-white rounded-lg text-black flex px-6 lg:px-10 items-center justify-between ${
            isSticky ? "py-3 " : " py-3 md:py-8 "
          }`}
        >
          <Logo className="block" />
          <ul className=" items-center gap-6 xl:gap-10 hidden lg:flex">
            <li>
              <Link className="menuitem" href="#about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="menuitem" href="#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="menuitem" href="https://boards.greenhouse.io/wormholelabs/">
                Jobs
              </Link>
            </li>
          </ul>

          <button
            className="group ml-auto block lg:hidden"
            onClick={handleToggleMenu}
          >
            <span
              className={`ml-auto block h-0.5 w-3.5  rounded-sm bg-black transition-all lg:group-hover:w-5 ${
                headerState.opened ? "mb-0 w-5 translate-y-1 rotate-45" : "mb-1"
              }`}
            ></span>
            <span
              className={`mb-1 block h-0.5 w-5 rounded-sm bg-black transition-all ${
                headerState.opened && "opacity-0"
              }`}
            ></span>
            <span
              className={`ml-auto block h-0.5 w-3.5 rounded-sm bg-black transition-all lg:group-hover:w-5 ${
                headerState.opened
                  ? "mb-0 w-5 -translate-y-1 -rotate-45"
                  : "mb-1"
              }`}
            ></span>
          </button>
        </div>
      </header>
      <MobileMenu headerState={headerState} setHeaderState={setHeaderState} />
    </>
  );
};

export default Header;
