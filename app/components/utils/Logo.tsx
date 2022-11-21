import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'PLACE_HOLDER',
  description: 'PLACE_HOLDER',
});
// =========================================================

function Logo(): ReactElement {
  return (
    <h1 id="logo">
      <a href="/">RemixExpenses</a>
    </h1>
  );
}

export default Logo;
// ########################################################
