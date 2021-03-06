import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import axiosClient from '@/lib/axios';

import { AuthProvider } from '@/contexts/auth';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url) => axiosClient.get(url).then((res) => res.data),
        }}
      >
        <AuthProvider>
          <React.Fragment>
            <Head>
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
              />
              <title>Notus NextJS by Creative Tim</title>
            </Head>
            <Component {...pageProps} />
          </React.Fragment>
        </AuthProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
