import { useEffect } from 'react';

interface NotificationToastProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function NotificationToast({ isVisible, onClose }: NotificationToastProps) {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-start gap-4 rounded-xl bg-[#0F0F0F] border border-[#262626] p-4 shadow-2xl min-w-[380px] animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex-shrink-0">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-[15px] font-semibold text-white leading-tight mb-1">
          Project request submitted!
        </h3>
        <p className="text-[14px] text-[#A3A3A3] leading-snug">
          We'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  );
}
