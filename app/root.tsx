import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import MainHeader from '~/components/navigation/MainHeader';
import sharedStyles from '~/styles/shared.css';
// =======================================================

// root shared styles link
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: sharedStyles },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});
// =======================================================
export default function App() {
  return (
    <html lang="en">
      <head>
        {/*meta-data*/}
        <Meta />

        {/*links to fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/*remix-link component*/}
        <Links />
        <title>Remix Expense App</title>
      </head>
      {/*body-section*/}
      <body>
        {/*- MAIN-HEADER -*/}
        <MainHeader />

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
// =======================================================
