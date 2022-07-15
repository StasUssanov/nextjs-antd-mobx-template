import React from 'react';
import '@fontsource/comfortaa';
import '@root/styles/globals.less';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Layout } from '@components/layout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
