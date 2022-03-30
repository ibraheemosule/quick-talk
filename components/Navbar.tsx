import { INavbar } from "../ts-types/componentTypes";
import { NavbarStyle } from "../styles/NavbarStyle.styled";
import { Container } from "../styles/Container.styled";
import Logo from "../assets/svgs/Logo";
import MoreIcon from "../assets/svgs/MoreIcon";
import Image from "next/image";
import avi from "../public/avi.jpg";
import Link from "next/link";
import { useState, MouseEvent } from "react";

const Navbar: React.FC<INavbar> = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDropdown = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();
    setToggle(!toggle);
  };
  return (
    <NavbarStyle>
      <Container>
        <nav>
          <div className="logo">
            <Logo />
          </div>
          <div className="profile">
            <button className="profile__user-image">
              <Image
                src={avi}
                height={100}
                width={100}
                objectFit="cover"
                objectPosition="top"
                alt="User avi"
              />
            </button>
            <div className="profile__user-info">
              <h1>Sarah Kyle</h1>
              <p>online</p>
            </div>
          </div>
          <div className="more__options">
            <button onClick={e => toggleDropdown(e)}>
              <span>More</span> <MoreIcon />
            </button>
            {toggle && (
              <ul className="dropdown">
                <li>
                  <button onClick={e => toggleDropdown(e)}>
                    {" "}
                    <Link href="/">Chat</Link>
                  </button>
                </li>
                <li>
                  <button onClick={e => toggleDropdown(e)}>
                    {" "}
                    <Link href="/profile">Profle</Link>
                  </button>
                </li>
                <li>
                  <button onClick={e => toggleDropdown(e)}>
                    {" "}
                    <Link href="/usage">Usage</Link>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </NavbarStyle>
  );
};

export default Navbar;
