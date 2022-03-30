import type { NextPage } from "next";
import { IHomePage } from "../ts-types/componentTypes";

const HomePage: NextPage<IHomePage> = () => {
  return (
    <>
      <div>Welcome to chat box</div>
    </>
  );
};

export default HomePage;
