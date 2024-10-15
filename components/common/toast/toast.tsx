import { toast, ToastContent, ToastOptions, Slide, Id } from 'react-toastify';

export const defaultOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  closeButton: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Slide,
};

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

/**
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export default function Toast(
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {},
): Id {
  const optionsToApply = { ...defaultOptions, ...options };

  switch (type) {
    case 'success':
      return toast.success(content, optionsToApply);
    case 'error':
      return toast.error(content, optionsToApply);
    case 'info':
      return toast.info(content, optionsToApply);
    case 'warning':
      return toast.warn(content, optionsToApply);
    case 'default':
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
}
