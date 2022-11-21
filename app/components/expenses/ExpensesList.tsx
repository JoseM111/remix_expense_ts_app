import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import ExpenseListItem from "~/components/expenses/ExpenseListItem"
import { ExpenseListType, ExpenseType } from "~/types/Expenses.types"
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

function ExpensesList({ expenses }: ExpenseListType): ReactElement {
  return (
    <ol id="expenses-list">
      {expenses?.map((expense: ExpenseType) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
// ########################################################
