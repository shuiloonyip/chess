function Modal({ open, onClose, children }) {
  return (
    <div
      className={[
        "fixed",
        "inset-0",
        "flex",
        "justify-center",
        "items-center",
        open ? "visible bg-black/50" : "invisible",
        "transition-colors",
      ].join(" ")}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-8 shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
export default Modal;
