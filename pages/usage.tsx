import type { NextPage } from "next";
import { UsageStyle } from "../styles/UsageStyle.styled";
import { IUsage } from "../ts-types/componentTypes";
import Head from "next/head";

const Usage: NextPage<IUsage> = () => (
  <>
    <Head>
      <title>Quick Talk | Usage</title>
      <meta
        name="keywords"
        content="quick talk app, chat app, chat, quick talk, messaging, project, chatting app"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content="Quick Talk App" />

      <meta name="twitter:image:src" content="https://quicktalk.vercel.app" />

      <meta name="twitter:site" content="Quick Talk | Application" />

      <meta name="twitter:title" content="Quick Talk | Application" />
      <meta name="twitter:description" content="Quick Talk Application" />
      <meta property="og:image" content="https://quicktalk.vercel.app" />
      <meta property="og:site_name" content="Quick Talk" />

      <meta property="og:title" content="Quick Talk Application" />

      <meta property="og:url" content="https://quicktalk.vercel.app" />

      <meta property="og:description" content="Quick Talk Application" />
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
