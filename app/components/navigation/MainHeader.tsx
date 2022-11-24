import type { LinksFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import Logo from "~/components/utils/Logo"
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: '' }];
};
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
