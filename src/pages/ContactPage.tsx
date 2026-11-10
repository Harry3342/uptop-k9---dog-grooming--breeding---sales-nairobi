import React, { useState } from 'react';
import { Phone, MessageSquare, Instagram, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { KENNEL_CONTACT } from '../data/kennelData';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [service, setService] = useState('Dog Grooming & Spa');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !privacyConsent) {
      alert('Please provide your name and phone number, and accept the Privacy Policy.');
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    if (!fullName || !phone || !privacyConsent) {
      alert('Please provide your name and phone number, and accept the Privacy Policy before sending your inquiry.');
      return;
    }
    const text = `Hello Uptop K9 Nairobi! My name is ${fullName || 'a client'}. I am interested in: ${service}. Phone: ${phone}. Message: ${message || 'I would like to inquire about your dogs and kennel services in Umoja.'}`;
    window.open(`https://wa.me/${KENNEL_CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3DE] to-[#F8F9F5] dark:from-[#1E261A] dark:to-[#141712] transition-colors">
        <div className="relative w-full h-[360px] sm:h-[440px] rounded-b-[40px] overflow-hidden shadow-sm">
          <img
            src="/assets/dogs/3.png"
            alt="Uptop K9 Contact Nairobi"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-white text-center">
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-black text-white/95 uppercase tracking-widest bg-[#76A035] px-4 py-1.5 rounded-full mb-3">
                <span>🐾</span>
                <span>Contact Us</span>
                <span>🐾</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Get in Touch with Uptop K9
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 mt-2 max-w-lg mx-auto">
                Visit our breeding and grooming facility in Nasra Gardens Estate, Nairobi or reach out directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 3 BIG CONTACT PILL CARDS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Card 1: Phone */}
        <a
          href={`tel:${KENNEL_CONTACT.phone}`}
          className="bg-white dark:bg-[#1A1F18] rounded-3xl p-5 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs hover:shadow-md hover:border-[#76A035] dark:hover:border-[#76A035] transition-all flex items-center gap-6 group cursor-pointer"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#98B868] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Phone className="w-8 h-8 fill-current text-white" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Direct Phone Call
            </span>
            <span className="text-2xl sm:text-4xl font-extrabold text-[#5B8226] dark:text-[#9EC468] tracking-wide">
              {KENNEL_CONTACT.phone}
            </span>
          </div>
        </a>

        {/* Card 2: WhatsApp */}
        <a
          href={`https://wa.me/${KENNEL_CONTACT.whatsapp}?text=Hello%20Uptop%20K9%20Nairobi%2C%20I%20would%20like%20to%20inquire%20about%20your%20dogs%20and%20grooming%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-[#1A1F18] rounded-3xl p-5 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs hover:shadow-md hover:border-[#76A035] dark:hover:border-[#76A035] transition-all flex items-center gap-6 group cursor-pointer"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#98B868] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <MessageSquare className="w-8 h-8 fill-current text-white" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              WhatsApp Chat
            </span>
            <span className="text-2xl sm:text-4xl font-extrabold text-[#5B8226] dark:text-[#9EC468] tracking-wide">
              {KENNEL_CONTACT.phone}
            </span>
          </div>
        </a>

        {/* Card 3: Instagram */}
        <a
          href={`https://www.instagram.com/${KENNEL_CONTACT.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-[#1A1F18] rounded-3xl p-5 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs hover:shadow-md hover:border-[#76A035] dark:hover:border-[#76A035] transition-all flex items-center gap-6 group cursor-pointer"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#98B868] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Official Instagram
            </span>
            <span className="text-2xl sm:text-4xl font-extrabold text-[#5B8226] dark:text-[#9EC468] tracking-wide">
              {KENNEL_CONTACT.instagram}
            </span>
          </div>
        </a>
      </section>

      {/* 3. CONTACT FORM CARD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-10 border border-[#E3ECD5] dark:border-[#2C3824] shadow-sm">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#F2F7EA] dark:bg-[#252E20] text-[#5B8226] dark:text-[#9EC468] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">Message Received!</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                Thank you, {fullName}. Our lead handler in Umoja will contact you back on <strong>{phone}</strong> within 15 minutes.
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="px-6 py-2.5 rounded-xl bg-[#008938] text-white text-xs font-bold hover:bg-[#00722e] flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Forward to WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-[#252E20] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column Inputs */}
                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#5B8226] dark:text-[#9EC468] mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Kamau"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F9F5] dark:bg-[#151914] border border-[#E3ECD5] dark:border-[#2C3824] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#76A035]"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold text-[#5B8226] dark:text-[#9EC468] mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F9F5] dark:bg-[#151914] border border-[#E3ECD5] dark:border-[#2C3824] text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#76A035]"
                    >
                      <option value="Dog Grooming & Spa">Dog Grooming & Spa</option>
                      <option value="Puppy Reservation & Purchase">Puppy Reservation & Purchase</option>
                      <option value="Dog Training & Boarding">Dog Training & Boarding</option>
                      <option value="Kennel Visit in Umoja">Schedule Kennel Visit in Umoja</option>
                      <option value="Nationwide Delivery Inquiry">Nationwide Delivery Inquiry</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-[#5B8226] dark:text-[#9EC468] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0712345678"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F9F5] dark:bg-[#151914] border border-[#E3ECD5] dark:border-[#2C3824] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#76A035]"
                    />
                  </div>
                </div>

                {/* Right Column: Message Box */}
                <div>
                  <label className="block text-xs font-bold text-[#5B8226] dark:text-[#9EC468] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={7}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you are looking for (e.g. Kangal puppy for estate protection, grooming appointment for shepherd, kennel tour)..."
                    className="w-full h-[calc(100%-28px)] px-4 py-3 rounded-2xl bg-[#F8F9F5] dark:bg-[#151914] border border-[#E3ECD5] dark:border-[#2C3824] text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#76A035] resize-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <label className="flex items-start gap-2 text-[11px] leading-5 text-gray-600 dark:text-gray-300 sm:max-w-xs">
                  <input type="checkbox" required checked={privacyConsent} onChange={(e) => setPrivacyConsent(e.target.checked)} className="mt-1 accent-[#76A035]" />
                  <span>I agree to the <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'privacy' }))} className="font-bold underline">Privacy Policy</button> so Uptop K9 can respond to this inquiry.</span>
                </label>
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-2xl bg-[#76A035] hover:bg-[#63892B] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="py-3.5 px-6 rounded-2xl bg-[#008938] hover:bg-[#00722e] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 4. LOCATION, DIRECTIONS & VISITING HOURS INFO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F7EA] dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-8 border border-[#E3ECD5] dark:border-[#2C3824] space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#5B8226] dark:text-[#9EC468]">
              <MapPin className="w-4 h-4" />
              <span>Kennel Location</span>
            </div>
            <h4 className="text-xl font-black text-gray-900 dark:text-white">{KENNEL_CONTACT.location}</h4>
            <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              {KENNEL_CONTACT.fullAddress}
            </p>
            </div>

            <div className="space-y-3 md:border-l md:border-[#E3ECD5] dark:md:border-[#2C3824] md:pl-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#5B8226] dark:text-[#9EC468]">
                <Clock className="w-4 h-4" />
                <span>Visiting & Kennel Hours</span>
              </div>
              <h4 className="text-base font-extrabold text-gray-900 dark:text-white">Monday - Sunday: 7:30 AM - 6:30 PM</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                To give our puppies and parent dogs quiet rest cycles and give you dedicated handler time,
                in-person kennel visits are strictly by scheduled appointment.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-xs font-bold uppercase text-[#5B8226] dark:text-[#9EC468]">Directions to Uptop K9</h4>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(KENNEL_CONTACT.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#5B8226] dark:text-[#9EC468] hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="h-72 sm:h-96 overflow-hidden rounded-2xl border border-[#D5E3C0] dark:border-[#2C3824] bg-gray-100 dark:bg-gray-800">
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <MapPin className="h-8 w-8 text-[#76A035]" />
                <p className="text-xs text-gray-600 dark:text-gray-300">Open Google Maps only when you choose to leave this site.</p>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(KENNEL_CONTACT.fullAddress)}`} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#76A035] px-4 py-2 text-xs font-bold text-white hover:bg-[#63892B]">Get directions</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
