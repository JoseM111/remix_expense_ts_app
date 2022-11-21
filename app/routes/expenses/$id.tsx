import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
  title: 'Update Expenses Page',
  description: 'A place to update the expenses (Dynamic Route)',
});
// =========================================================

function UpdateExpensesPage(): ReactElement {
  return (
    /** EXPENSE_FORM COMPONENT*/
    <ExpenseForm />
  );
}

export default UpdateExpensesPage;
// ########################################################
