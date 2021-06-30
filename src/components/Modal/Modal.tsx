import "./Modal.scss";

export interface ModalProps {
    show: boolean;
    children: React.ReactNode;
}

const Modal = ({show, children }: ModalProps) => {
    const modalClass = show ? "modal modal--visible" : "modal";

  return (
    <div className={modalClass}>
      <section className="modal__main">
        {children}
      </section>
    </div>
  );
};

export default Modal;
