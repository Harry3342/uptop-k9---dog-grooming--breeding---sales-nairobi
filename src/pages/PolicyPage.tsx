import React from 'react';

export type PolicyType = 'privacy' | 'terms' | 'refunds' | 'cookies';

interface PolicyPageProps {
  type: PolicyType;
}

const policyContent: Record<PolicyType, { title: string; intro: string; sections: Array<{ heading: string; body: string }> }> = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'We collect only the information needed to answer an inquiry, schedule a service, or process a requested payment.',
    sections: [
      { heading: 'Information we collect', body: 'Depending on your request, this may include your name, phone number, appointment details, pet details relevant to care, and delivery or visit area. We do not request passwords, identity documents, payment card numbers, or sensitive personal information through this site.' },
      { heading: 'How we use it', body: 'We use your information to respond to you, coordinate appointments, provide requested services, confirm payments, and keep basic business records. We do not sell your information or use it for unrelated marketing without a separate opt-in.' },
      { heading: 'Sharing and retention', body: 'We share information only with service providers needed to fulfil your request, such as a payment or messaging service you choose to use. We keep booking records only as long as reasonably necessary for service, legal, accounting, and dispute-resolution purposes, then delete or anonymise them.' },
      { heading: 'Your choices', body: 'You may ask what information we hold about you, request correction or deletion where legally possible, or withdraw optional marketing consent. Contact us using the details in the footer.' },
    ],
  },
  terms: {
    title: 'Terms of Service',
    intro: 'These terms explain what to expect when you browse, book, purchase, or contact Uptop K9.',
    sections: [
      { heading: 'Bookings', body: 'A booking request is not confirmed until our team contacts you. Appointment times are subject to availability. Please provide accurate contact and pet information so we can prepare safely.' },
      { heading: 'Prices and fees', body: 'Prices shown at checkout are the amount currently due for the selected service or item. Any mobile visit fee is shown before confirmation. We do not add hidden fees. If a change is required, we will explain it and obtain your agreement before charging.' },
      { heading: 'Payments', body: 'M-Pesa payments are initiated only after you review the displayed recipient and amount. A payment request does not replace confirmation of service availability.' },
      { heading: 'Responsible care', body: 'Service suitability depends on the pet’s health, temperament, and needs. Tell us about relevant care requirements before an appointment. We may recommend a safer alternative when necessary.' },
    ],
  },
  refunds: {
    title: 'Refund Policy',
    intro: 'We aim to resolve payment and service issues fairly and without surprise conditions.',
    sections: [
      { heading: 'Cancellations', body: 'Contact us as soon as possible if you need to cancel or reschedule. Where a service has not started, we will normally reschedule or refund a payment, less any clearly communicated non-recoverable costs.' },
      { heading: 'Service issues', body: 'If a service was not delivered as agreed, contact us within 7 days with the booking details. We will review the issue and offer a reasonable remedy, which may include a rebooking or refund.' },
      { heading: 'Puppy reservations and products', body: 'Reservation deposits and merchandise refunds depend on whether the item or reservation has been fulfilled and any terms communicated before payment. We will explain any restriction before accepting payment; there are no undisclosed charges.' },
      { heading: 'How to request help', body: 'Use our Contact page or the phone number in the footer. Include your name, phone number, date, and payment reference if available. Never send a PIN or password.' },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    intro: 'This site uses a minimal, privacy-first approach to cookies and similar storage.',
    sections: [
      { heading: 'Strictly necessary storage', body: 'We use browser storage to remember your display preference and your cookie choice. These items are not used to identify you, advertise to you, or track you across websites.' },
      { heading: 'No optional tracking', body: 'We do not currently use analytics, advertising pixels, social tracking SDKs, or marketing cookies. Third-party sites such as WhatsApp, Instagram, TikTok, and Google Maps are opened only when you choose those links.' },
      { heading: 'Your controls', body: 'You can clear browser storage or change your browser settings at any time. Clearing it may reset your theme and show the consent notice again. The site remains usable without optional cookies because none are required.' },
    ],
  },
};

export const PolicyPage: React.FC<PolicyPageProps> = ({ type }) => {
  const content = policyContent[type];
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-white dark:bg-[#1A1F18] rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] p-6 sm:p-10 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-[#5B8226] dark:text-[#9EC468]">Uptop K9</p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-black text-gray-900 dark:text-white">{content.title}</h1>
        <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">{content.intro}</p>
        <div className="mt-10 space-y-8">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-black text-gray-900 dark:text-white">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-10 border-t border-[#E3ECD5] dark:border-[#2C3824] pt-5 text-xs text-gray-500 dark:text-gray-400">
          Last updated: 2 November 2026. Contact us if you need this information in another format.
        </p>
      </div>
    </article>
  );
};
