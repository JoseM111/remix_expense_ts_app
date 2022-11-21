import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import type { ExpenseType } from '~/types/Expenses.types';
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

function ExpenseListItem({ title, amount }: ExpenseType): ReactElement {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <a href="tbd">Edit</a>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
// ########################################################
