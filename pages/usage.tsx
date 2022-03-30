import type { NextPage } from "next";
import { UsageStyle } from "../styles/UsageStyle.styled";
import { IUsage } from "../ts-types/componentTypes";

const Usage: NextPage = () => {
  return (
    <UsageStyle>
      <div className="usage">
        <h1>Application Usage</h1>
        <ul className="usage__info">
          <li>Double click on the trash icon below a message to delete</li>
          <li>
            On touch screens, double tap on the trash icon below a message to
            delete
          </li>
          <li>Use the more button to explore other pages</li>
        </ul>
      </div>
    </UsageStyle>
  );
};

export default Usage;
