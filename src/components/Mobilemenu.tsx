import Link from "next/link";
import { useRef, useState } from "react";
import { BurgerState } from "./Header";

interface MenuProps {
  headerState: BurgerState;
  setHeaderState: Function;
}

const MobileMenu = ({ headerState, setHeaderState }: MenuProps) => {
  let burgerMenu = useRef(null);
  const [openMenu, setOpenMenu] = useState();

  const closeMenu = () => {
    setHeaderState({
      ...headerState,
      opened: !headerState.opened,
    });
  };

  return (
    <div
      ref={burgerMenu}
      className={`fixed top-0  z-[9] flex items-center justify-center  h-full w-full overflow-auto overscroll-y-none bg-white ${
        headerState.opened ? "right-0" : "-right-full "
      }`}
    >
      <ul className="flex flex-col items-center gap-3 text-black ">
        <li>
          <Link className="menuitem" href="#about-us" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link className="menuitem" href="#our-team" onClick={closeMenu}>
            Our Team
          </Link>
        </li>
        <li>
          <Link className="menuitem" href="#contact-us" onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
