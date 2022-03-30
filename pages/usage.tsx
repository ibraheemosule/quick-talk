import type { NextPage } from "next";
import { UsageStyle } from "../styles/UsageStyle.styled";
import { IUsage } from "../ts-types/componentTypes";
import Head from "next/head";

const Usage: NextPage<IUsage> = () => (
  <>
    <Head>
      <title>Quick Chatter | Usage</title>
      <meta
        name="keywords"
        content="Quick Chatter app, chat app, chat, Quick Chatter, messaging, project, chatting app"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content="Quick Chatter App" />

      <meta
        name="twitter:image:src"
        content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1648650507/samples/quickchatter_ynptsb.png"
      />

      <meta name="twitter:site" content="Quick Chatter | Application" />

      <meta name="twitter:title" content="Quick Chatter | Application" />
      <meta name="twitter:description" content="Quick Chatter Application" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1648650507/samples/quickchatter_ynptsb.png"
      />
      <meta property="og:site_name" content="Quick Chatter" />

      <meta property="og:title" content="Quick Chatter Application" />

      <meta property="og:url" content="https://quicktalk.vercel.app" />

      <meta property="og:description" content="Quick Chatter Application" />
    </Head>

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
  </>
);

export default Usage;
