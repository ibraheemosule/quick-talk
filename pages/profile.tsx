import type { NextPage } from "next";
import { ProfileStyle } from "../styles/ProfileStyle.styled";
import { IProfile } from "../ts-types/componentTypes";
import avi from "../public/avi.jpg";
import Image from "next/image";

const userInfo = {
  name: "Sarah Kyle",
  phone: "+234 568 374 9235",
};

const Profile: NextPage = () => {
  return (
    <ProfileStyle>
      <div className="profile">
        <div className="profile__user-image">
          <Image
            src={avi}
            height={250}
            width={250}
            objectFit="cover"
            objectPosition="top"
            alt="User avi"
          />
        </div>
        <div className="profile__user-info">
          <h1>{userInfo.name}</h1>
          <h4>{userInfo.phone.toLocaleString()}</h4>
          <h5>I&apos;m an extrovert that loves to travel</h5>
        </div>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
