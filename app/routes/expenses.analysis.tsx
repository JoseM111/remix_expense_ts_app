import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import { DUMMY_EXPENSE } from "~/data/Dummy.data"
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'Expenses Analysis Page',
  description: 'A page to see the analysis of the expense data',
});
// =========================================================

function ExpensesAnalysisPage(): ReactElement {
  return (
    <main>
      {/*- CHART COMPONENT -*/}
      <Chart expenses={DUMMY_EXPENSE} />

      {/*- EXPENSE_STATISTICS COMPONENT -*/}
      <ExpenseStatistics expenses={DUMMY_EXPENSE} />
    </main>
  );
}

export default ExpensesAnalysisPage;
// ########################################################
