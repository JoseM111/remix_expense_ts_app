import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link } from "@remix-run/react"
import type { ReactElement } from 'react';
import { FaArrowRight, FaChartBar, FaDollarSign } from "react-icons/fa"
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'Home Page',
  description: 'PLACE_HOLDER',
});
// =========================================================

function Index(): ReactElement {
  return (
    <main>
      <section className="marketing-section">
        <header>
          <FaDollarSign />
          <h2>A Central Space</h2>
        </header>
        <div className="marketing-content">
          <div className="marketing-image">
            <img src="public/images/expenses-management.jpg" alt="A list of expenses." />
          </div>
          <div className="marketing-explanation">
            <p>Manage your expenses in one central place.</p>
            <p>
              <Link className="cta" to="/expenses">
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="marketing-section">
        <header>
          <FaChartBar />
          <h2>Detailed Analytics</h2>
        </header>
        <div className="marketing-content">
          <p className="marketing-explanation">
            Benefit from best-in-class analytics to understand your spending
            patterns.
          </p>
          <div className="marketing-image">
            <img src="public/images/expenses-chart.jpg" alt="A demo bar chart." />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
// ########################################################
