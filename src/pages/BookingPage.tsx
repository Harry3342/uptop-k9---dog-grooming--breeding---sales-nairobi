import React, { useState } from 'react';
import { 
  Calendar, CheckCircle2
} from 'lucide-react';
import { KENNEL_CONTACT } from '../data/kennelData';

interface BookingPageProps {
  initialServiceName?: string;
  initialPriceKES?: number;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialServiceName = 'Full Royal Spa & De-Shedding',
  initialPriceKES = 5500,
}) => {
  const [selectedService, setSelectedService] = useState(initialServiceName);
  const [serviceLocation, setServiceLocation] = useState<'kennel' | 'mobile_van'>('kennel');
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('Kangal');
  const [petAge, setPetAge] = useState('');
  
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [nairobiEstate, setNairobiEstate] = useState('Umoja 1 / 2');
  
  const [bookingDate, setBookingDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [timeSlot, setTimeSlot] = useState('09:30 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Calculate pricing based on selection
  const getPrice = () => {
    let base = selectedService === initialServiceName ? initialPriceKES : 5500;
    if (selectedService.includes('Fresh Paw')) base = 3500;
    else if (selectedService.includes('Puppy First')) base = 3000;
    else if (selectedService.includes('Reservation')) base = 15000; // Deposit for puppy
    else if (selectedService.includes('Training')) base = 25000;
    else if (selectedService.includes('Kennel Tour') || selectedService.includes('Kennel Visit')) base = 0; // Free visit

    if (serviceLocation === 'mobile_van' && base > 0) {
      base += 1500; // Mobile travel fee within Nairobi
    }
    return base;
  };

  const currentPrice = getPrice();

  const handleCompleteBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !privacyConsent) {
      setSubmissionError('Please provide your name and phone number, and accept the Privacy Policy to continue.');
      return;
    }

    setSubmissionError('');
    setIsSubmitting(true);
    try {
      const bookingApiUrl = import.meta.env.VITE_BOOKING_API_URL?.trim() || '/api/bookings';
      const response = await fetch(bookingApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selectedService,
          serviceLocation,
          petName,
          petBreed,
          petAge,
          clientName,
          clientPhone,
          nairobiEstate,
          bookingDate,
          timeSlot,
          amountKES: currentPrice,
          privacyConsent: true,
        })
      });

      const responseText = await response.text();
      let result: { error?: string } = {};
      if (responseText.trim()) {
        try {
          result = JSON.parse(responseText) as { error?: string };
        } catch {
          throw new Error(
            'The booking service returned an invalid response. Please make sure the booking API is running.'
          );
        }
      }
      if (!response.ok) {
        throw new Error(
          result.error ||
          `The appointment could not be saved (server returned ${response.status}).`
        );
      }

      setBookingConfirmed(true);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'The appointment could not be saved. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#EBF3DE] to-[#F8F9F5] dark:from-[#1E261A] dark:to-[#141712] pt-10 pb-6 px-4 sm:px-6 lg:px-8 text-center transition-colors">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B8226] dark:text-[#9EC468] bg-white dark:bg-[#1A1F18] px-4 py-1 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>Official Booking & Scheduling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Book Grooming, Training or Kennel Visit
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Reserve professional dog grooming at our Nasra Gardens Estate salon, schedule a mobile van home appointment,
            or arrange an in-person viewing of our parent dogs and available litters.
          </p>
        </div>
      </section>

      {/* 2. Main Booking Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {bookingConfirmed ? (
          <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-8 sm:p-12 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xl text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] dark:bg-[#1C2C1D] text-[#008938] dark:text-[#4ADE80] flex items-center justify-center mx-auto border-2 border-[#008938]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white">Booking Request Received!</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              Thank you, <strong>{clientName}</strong>! We have received your request for <strong>{petName || 'your pet'}</strong> on <strong>{bookingDate} at {timeSlot}</strong>. Our handlers will contact you to confirm.
            </p>

            <div className="bg-[#F8F9F5] dark:bg-[#151914] p-5 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2 border border-gray-200 dark:border-[#2C3824]">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Service</span>
                <span className="font-bold text-gray-900 dark:text-white">{selectedService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Location</span>
                <span className="font-bold text-gray-900 dark:text-white">
                  {serviceLocation === 'kennel' ? 'Uptop K9 Umoja Kennel' : `Mobile Van to ${nairobiEstate}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Contact Number</span>
                <span className="font-bold text-gray-900 dark:text-white">{clientPhone}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
                <span className="text-gray-700 dark:text-gray-300 font-bold">Total Amount Due</span>
                <span className="font-black text-[#5B8226] dark:text-[#9EC468] text-sm">
                  {currentPrice === 0 ? 'FREE (Kennel Tour)' : `KSh ${currentPrice.toLocaleString('en-KE')}`}
                </span>
              </div>
            </div>

            {currentPrice > 0 && (
              <div className="pt-2 text-sm text-gray-600 dark:text-gray-300">
                <p>To pay manually, use M-PESA Buy Goods Till <strong className="text-gray-900 dark:text-white">{KENNEL_CONTACT.mpesaTill}</strong>.</p>
                <p className="mt-1 text-xs">Pay KSh {currentPrice.toLocaleString('en-KE')} and share the M-PESA confirmation with us at {KENNEL_CONTACT.phoneFormatted}.</p>
              </div>
            )}

            <p className="text-[11px] text-gray-500 dark:text-gray-400 pt-2">
              Our handlers will call or send an SMS confirmation to <strong>{clientPhone}</strong> shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleCompleteBooking} className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-10 border border-[#E3ECD5] dark:border-[#2C3824] shadow-sm space-y-8">
            {/* Step 1: Select Service */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                <span className="w-6 h-6 rounded-full bg-[#76A035] text-white flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Select Service & Location</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setSelectedService('Full Royal Spa & De-Shedding')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedService === 'Full Royal Spa & De-Shedding'
                      ? 'border-[#76A035] bg-[#F2F7EA] dark:bg-[#252E20] ring-2 ring-[#76A035]/20'
                      : 'border-gray-200 dark:border-gray-800 bg-transparent hover:border-[#76A035]/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs text-gray-900 dark:text-white">Full Royal Spa & De-Shedding</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">High-velocity blow, furminator, nails & ears</p>
                    </div>
                    <span className="text-xs font-bold text-[#5B8226] dark:text-[#9EC468]">KSh 5,500</span>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedService('Fresh Paw Bath & Dry')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedService === 'Fresh Paw Bath & Dry'
                      ? 'border-[#76A035] bg-[#F2F7EA] dark:bg-[#252E20] ring-2 ring-[#76A035]/20'
                      : 'border-gray-200 dark:border-gray-800 bg-transparent hover:border-[#76A035]/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs text-gray-900 dark:text-white">Fresh Paw Bath & Dry</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Hypoallergenic bath, blowout, scent</p>
                    </div>
                    <span className="text-xs font-bold text-[#5B8226] dark:text-[#9EC468]">KSh 3,500</span>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedService('Puppy Reservation & Viewing')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedService === 'Puppy Reservation & Viewing'
                      ? 'border-[#76A035] bg-[#F2F7EA] dark:bg-[#252E20] ring-2 ring-[#76A035]/20'
                      : 'border-gray-200 dark:border-gray-800 bg-transparent hover:border-[#76A035]/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs text-gray-900 dark:text-white">Puppy Reservation Deposit</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Reserve next pick of litter with microchip</p>
                    </div>
                    <span className="text-xs font-bold text-[#5B8226] dark:text-[#9EC468]">KSh 15,000</span>
                  </div>
                </div>

                <div
                  onClick={() => setSelectedService('Free Kennel Tour & Handler Consultation')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    selectedService === 'Free Kennel Tour & Handler Consultation'
                      ? 'border-[#76A035] bg-[#F2F7EA] dark:bg-[#252E20] ring-2 ring-[#76A035]/20'
                      : 'border-gray-200 dark:border-gray-800 bg-transparent hover:border-[#76A035]/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs text-gray-900 dark:text-white">Kennel Tour & Consultation</h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Meet parent dogs & view Umoja compound</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">FREE</span>
                  </div>
                </div>
              </div>

              {/* Location Toggle */}
              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setServiceLocation('kennel')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    serviceLocation === 'kennel'
                      ? 'bg-[#76A035] text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-[#252E20] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2F3B29]'
                  }`}
                >
                  At Uptop K9 Umoja Salon
                </button>
                <button
                  type="button"
                  onClick={() => setServiceLocation('mobile_van')}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    serviceLocation === 'mobile_van'
                      ? 'bg-[#76A035] text-white shadow-xs'
                      : 'bg-gray-100 dark:bg-[#252E20] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2F3B29]'
                  }`}
                >
                  Mobile Home Van Visit (+KSh 1,500)
                </button>
              </div>
            </div>

            {/* Step 2: Pet Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                <span className="w-6 h-6 rounded-full bg-[#76A035] text-white flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Pet Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Pet Name</label>
                  <input
                    type="text"
                    required
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Simba"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Breed</label>
                  <select
                    value={petBreed}
                    onChange={(e) => setPetBreed(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  >
                    <option value="Kangal">Kangal</option>
                    <option value="Caucasian Shepherd">Caucasian Shepherd</option>
                    <option value="Royal Black Shepherd">Royal Black German Shepherd</option>
                    <option value="White Swiss Shepherd">White Swiss Shepherd</option>
                    <option value="American Akita">American Akita</option>
                    <option value="Rottweiler / Boerboel">Rottweiler / Boerboel</option>
                    <option value="Other Companion">Other Breed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Age / Weight</label>
                  <input
                    type="text"
                    value={petAge}
                    onChange={(e) => setPetAge(e.target.value)}
                    placeholder="e.g. 1.5 yrs / 45kg"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Date & Schedule */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                <span className="w-6 h-6 rounded-full bg-[#76A035] text-white flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Schedule Appointment</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Preferred Time Slot</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  >
                    <option value="08:30 AM">08:30 AM (Early Bird)</option>
                    <option value="09:30 AM">09:30 AM (Morning)</option>
                    <option value="11:30 AM">11:30 AM (Midday)</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="04:00 PM">04:00 PM (Late Afternoon)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Owner Contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
                <span className="w-6 h-6 rounded-full bg-[#76A035] text-white flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Your Contact & Nairobi Estate</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Dennis Kariuki"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">M-Pesa Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="e.g. 0796784945 or 0712345678"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Nairobi Estate / Area</label>
                  <input
                    type="text"
                    value={nairobiEstate}
                    onChange={(e) => setNairobiEstate(e.target.value)}
                    placeholder="e.g. Umoja 1, Donholm, Buruburu, Karen, Westlands, Kilimani..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-[#151914] border border-gray-200 dark:border-gray-700 text-xs text-gray-900 dark:text-white focus:ring-2 focus:ring-[#76A035]"
                  />
                </div>
              </div>
            </div>

            {/* Total & Submit Button */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              {submissionError && (
                <p role="alert" className="text-xs font-semibold text-red-600 dark:text-red-400">
                  {submissionError}
                </p>
              )}
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400 block">Total Estimated Cost</span>
                <span className="text-2xl font-black text-[#5B8226] dark:text-[#9EC468]">
                  {currentPrice === 0 ? 'FREE' : `KSh ${currentPrice.toLocaleString('en-KE')}`}
                </span>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <label className="flex items-start gap-2 text-[11px] leading-5 text-gray-600 dark:text-gray-300 sm:max-w-xs">
                  <input type="checkbox" required checked={privacyConsent} onChange={(e) => setPrivacyConsent(e.target.checked)} className="mt-1 accent-[#76A035]" />
                  <span>I agree to the <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'privacy' }))} className="font-bold underline">Privacy Policy</button> and understand this information is used to manage my booking.</span>
                </label>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-2xl bg-[#76A035] hover:bg-[#63892B] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Saving Appointment...' : 'Confirm Appointment'}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
