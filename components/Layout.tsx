import { LayoutStyle } from "../styles/LayoutStyle.styled";
import { ILayout } from "../ts-types/componentTypes";
import Navbar from "./Navbar";
import Image from "next/image";
import bg from "../public/background.jpeg";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <LayoutStyle>
      <Navbar />
      <div className="bg__wrapper">
        <Image src={bg} layout="fill" alt="User avi" />
      </div>
      <div className="children">{children}</div>
    </LayoutStyle>
  );
};

export default Layout;
