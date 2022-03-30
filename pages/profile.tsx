import type { NextPage } from "next";
import { ProfileStyle } from "../styles/ProfileStyle.styled";
import { IProfile } from "../ts-types/componentTypes";
import avi from "../public/avi.jpg";
import Image from "next/image";
import Head from "next/head";

const userInfo = {
  name: "Sarah Kyle",
  phone: "+234 568 374 9235",
};

const Profile: NextPage<IProfile> = () => (
  <>
    <Head>
      <title>Quick Talk | Profile</title>
      <meta
        name="keywords"
        content="quick talk app, chat app, chat, quick talk, messaging, project, chatting app, user profile"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content="Quick Talk User Profile" />

      <meta name="twitter:image:src" content="https://quicktalk.vercel.app" />

      <meta name="twitter:site" content="Quick Talk | Application" />

      <meta name="twitter:title" content="Quick Talk | Application" />
      <meta name="twitter:description" content="Quick Talk User Profile" />
      <meta property="og:image" content="https://quicktalk.vercel.app" />
      <meta property="og:site_name" content="Quick Talk" />

      <meta property="og:title" content="Quick Talk User Profile" />

      <meta property="og:url" content="https://quicktalk.vercel.app" />

      <meta property="og:description" content="Quick Talk User Profile" />
    </Head>

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
  </>
);

export default Profile;
