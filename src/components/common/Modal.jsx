import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  document.body.style.overflow = "hidden";

  const handleClose = () => {
    document.body.style.overflow = "auto";
    onClose()
  }

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        p-4
      "
      onClick={handleClose}
    >
      <div
        className="
          relative
          w-full
          max-w-lg
          rounded-xl
          bg-card
          border border-surface
          shadow-2xl
          p-6
          animate-in fade-in zoom-in duration-200
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="
            absolute
            top-1
            right-1
            h-8
            w-8
            rounded-full
            flex
            items-center
            justify-center
            text-text-secondary
            hover:bg-surface
            hover:text-text-primary
            transition-colors
          "
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;