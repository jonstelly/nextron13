import React from "react";
import Head from "next/head";
import Link from "next/link";

function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>Index - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -<Link href="/next">Go to next page</Link>
          <Link href="/home">Go to home page</Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
}

export default Index;

