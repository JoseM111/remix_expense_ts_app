import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
//import { useNavigate } from 'react-router';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/utils/Modal';
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
  //const navigate = useNavigate();

  //function closeHandler() {
  //  // navigate programmatically
  //  navigate('..');
  // works like below ⤵️
  // <Modal onClose={closeHandler}>
  //}

  return (
    <Modal>
      {/*- EXPENSE_FORM COMPONENT -*/}
      <ExpenseForm />
    </Modal>
  );
}

export default UpdateExpensesPage;
// ########################################################
