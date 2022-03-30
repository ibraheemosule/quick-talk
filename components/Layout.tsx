import { LayoutStyle } from "../styles/LayoutStyle.styled";
import { ILayout } from "../ts-types/componentTypes";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <LayoutStyle>
      <div>{children}</div>
    </LayoutStyle>
  );
};

export default Layout;
