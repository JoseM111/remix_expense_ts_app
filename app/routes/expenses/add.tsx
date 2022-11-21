import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'Add Expense Page',
  description: 'A page to add a new expense',
});
// =========================================================

function AddExpensesPage(): ReactElement {
  return (
    /** EXPENSE_FORM COMPONENT*/
    <ExpenseForm />
  );
}

export default AddExpensesPage;
// ########################################################
