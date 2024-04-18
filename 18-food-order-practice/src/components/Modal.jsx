import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  open,
  onClose,
  children,
  submitText,
  onSubmit,
}) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
      <form method="dialog" className="modal-actions">
        <button type="button" onClick={onClose} className="text-button">
          Close
        </button>
        {submitText && (
          <button type="button" onClick={onSubmit} className="button">
            {submitText}
          </button>
        )}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}
