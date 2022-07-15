import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content=""/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
};

export default Document;
