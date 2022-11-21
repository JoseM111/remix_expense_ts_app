import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { useMemo } from "react"
import type { ReactElement } from 'react';
import type { ExpenseListType, ExpenseType } from "~/types/Expenses.types"
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'PLACE_HOLDER',
  description: 'PLACE_HOLDER',
});



function calculateSummaryStatistics(expenses: Array<ExpenseType>) {
  const amounts = expenses.map((expense: ExpenseType) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0) ?? 0;
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}
// =========================================================

function ExpenseStatistics({ expenses }: ExpenseListType): ReactElement {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses],
  );

  return (
    <section>
      <h2>Summary Statistics</h2>
      <dl id="expense-statistics">
        <div>
          <dt>Total</dt>
          <dd>${sum.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Average</dt>
          <dd>${mean.toFixed(2)}</dd>
        </div>
        <div>
          <dt> Min. Amount</dt>
          <dd>${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          <dt>Max. Amount</dt>
          <dd>${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
// ########################################################
