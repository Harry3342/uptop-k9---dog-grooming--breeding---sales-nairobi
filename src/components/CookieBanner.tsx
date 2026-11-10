import React, { useEffect, useState } from 'react';

const CONSENT_KEY = 'uptop_k9_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(CONSENT_KEY) !== 'necessary');
  }, []);

  const acknowledge = () => {
    localStorage.setItem(CONSENT_KEY, 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-[#D5E3C0] bg-white p-5 text-gray-900 shadow-2xl dark:border-[#2C3824] dark:bg-[#1A1F18] dark:text-white" aria-label="Cookie notice">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-black">Privacy-friendly cookies</h2>
          <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">
            We use only necessary browser storage for your preferences and this choice. No analytics or advertising cookies are used.
            Read our <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'cookies' }))} className="font-bold underline">Cookie Policy</button>.
          </p>
        </div>
        <button type="button" onClick={acknowledge} className="shrink-0 rounded-xl bg-[#76A035] px-5 py-3 text-xs font-bold text-white hover:bg-[#63892B]">
          Continue with necessary only
        </button>
      </div>
    </aside>
  );
};
