import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
	title: 'PLACE_HOLDER',
	description: 'PLACE_HOLDER'
});
// =========================================================

function MainHeader(): ReactElement {
	return (
		<header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/expenses">Expenses</a>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <a href="/auth" className="cta">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
	);
}

export default MainHeader;
// ########################################################
