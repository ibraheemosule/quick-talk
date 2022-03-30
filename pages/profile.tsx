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
      <title>Quick Chatter | Profile</title>
      <meta
        name="keywords"
        content="Quick Chatter app, chat app, chat, Quick Chatter, messaging, project, chatting app, user profile"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content="Quick Chatter User Profile" />

      <meta
        name="twitter:image:src"
        content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1648650507/samples/quickchatter_ynptsb.png"
      />

      <meta name="twitter:site" content="Quick Chatter | Application" />

      <meta name="twitter:title" content="Quick Chatter | Application" />
      <meta name="twitter:description" content="Quick Chatter User Profile" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1648650507/samples/quickchatter_ynptsb.png"
      />
      <meta property="og:site_name" content="Quick Chatter" />

      <meta property="og:title" content="Quick Chatter User Profile" />

      <meta property="og:url" content="https://quicktalk.vercel.app" />

      <meta property="og:description" content="Quick Chatter User Profile" />
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
