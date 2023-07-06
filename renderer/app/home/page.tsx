'use client'

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

function Home() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log('useEffect')
    const interval = setInterval(() => {
      if (counter > 100) clearInterval(interval);
      setCounter(counter + 1);
    }
      , 1000);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -<Link href="/next">Go to next page</Link>
          <Link href="/">Go to index page</Link>
        </p>
        <div>
          <p>Counter: {counter}</p>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        <div>

          <img src="/images/logo.png" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;

