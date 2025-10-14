import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white border-b-4 border-gray-900 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 font-title">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;