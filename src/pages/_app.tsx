import { QueryClientProvider } from 'react-query';

import { globalStyles } from '@styles/defaultStyles/globalStyles';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { queryClient } from '../services/query-client';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles();
  return (
    <>
      <Head>
        <title>Tests with React-Query and MSW</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="title" content="Tests with React-Query and MSW" />
        <meta
          name="description"
          content="Um boilerplate criado com nextjs, typescript, stitches, pwa e muito mais"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
