import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
import type { ModalType } from "~/types/WithChildren.types"
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

function Modal({ children, onClose }: ModalType): ReactElement {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <dialog className="modal" open onClick={(event) => event.stopPropagation()}>
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
// ########################################################
