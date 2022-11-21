import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import type { ReactElement } from 'react';
import ExpensesList from '~/components/expenses/ExpensesList';
import { DUMMY_EXPENSE } from '~/data/Dummy.data';
import expenseLayoutStyles from '~/styles/expenses.css';
// =========================================================

// link to styles for the ExpensesLayoutPage
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: expenseLayoutStyles },
];
// =========================================================
export const meta: MetaFunction = () => ({
  title: 'PLACE_HOLDER',
  description: 'PLACE_HOLDER',
});
// =========================================================

function ExpensesLayoutPage(): ReactElement {
  return (
    <>
      {/* outlet-injected into all expenses routes */}
      <Outlet />

      <main>
        {/*- EXPENSES_LIST COMPONENT -*/}
        <ExpensesList expenses={DUMMY_EXPENSE} />
      </main>
    </>
  );
}

export default ExpensesLayoutPage;
// ########################################################
