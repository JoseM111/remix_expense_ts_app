import type { LinksFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import type { ReactElement } from 'react';
import type { ExpenseType } from '~/types/Expenses.types';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};
// =========================================================

function ExpenseListItem({ id, title, amount }: ExpenseType): ReactElement {
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
        {/* id: is a relative link */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
// ########################################################
