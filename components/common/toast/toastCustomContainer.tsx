import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { PropsWithChildren } from 'react';

const CustomCloseButton = ({ closeToast }: { closeToast?: () => void }) => {
  return (
    <button
      onClick={closeToast}
      className="text-white bg-transparent hover:text-opacity-50 focus:outline-none mr-2"
    >
      ✕
    </button>
  );
};

export default function ToastCustomContainer({ children }: PropsWithChildren) {
  const contextClass = {
    success: 'bg-green',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-black-opacity-70',
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || 'default'] +
          ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
        }
        bodyClassName={() =>
          'flex items-center text-sm font-white font-med block p-3'
        }
        closeButton={<CustomCloseButton />}
      />
    </>
  );
}
