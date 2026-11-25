import React, { useState } from 'react';

const PHONE = '(888) 990-9020';
const PHONE_LINK = 'tel:+18889909020';

const policies = {
  privacy: {
    title: 'Privacy Policy — Flights-Service.com',
    content: [
      {
        heading: '1. Information We Collect:',
        text: 'When you call (888) 990-9020 or submit a callback request on Flights-Service.com, we collect contact and itinerary information you voluntarily provide, such as your name, phone number, email address, airline name, and booking reference (PNR), solely to fulfill your travel assistance request.',
      },
      {
        heading: '2. How We Use Information:',
        text: 'Your information is used strictly to verify reservation rules, process flight bookings, modifications, cancellations, or name corrections with airlines/GDS providers, and send itinerary confirmations.',
      },
      {
        heading: '3. Data Security & Sharing:',
        text: 'We do not sell your personal information to third-party marketers. Data is shared only with relevant airlines, ticketing partners, and payment processors required to complete your authorized transaction.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions — Flights-Service.com',
    content: [
      {
        heading: '1. Independent Third-Party Agency:',
        text: 'Flights-Service.com acts as an independent travel agency and intermediary between travelers and airlines. We are not affiliated with any airline carrier.',
      },
      {
        heading: '2. Airline Fare Rules:',
        text: 'All flight tickets, date/route changes, cancellations, and passenger name corrections are governed by the fare rules and conditions of carriage of the applicable airline.',
      },
      {
        heading: '3. Authorization & Service Fees:',
        text: "By authorizing a transaction over the phone or online, you agree to pay the total quoted amount, which includes both airline charges (base fare, taxes, fare differences, or airline penalties) and Flights-Service.com's disclosed agency service fee / commission.",
      },
    ],
  },
  refund: {
    title: 'Service Fee & Refund Policy — Flights-Service.com',
    content: [
      {
        heading: '1. Agency Service Fees / Commissions:',
        text: 'Flights-Service.com charges a service fee / commission for travel booking, itinerary modification, cancellation processing, and name correction assistance. Agency service fees are non-refundable once the requested travel service has been completed and confirmed.',
      },
      {
        heading: '2. Airline Ticket Refunds & Credits:',
        text: 'Eligibility for a monetary refund or future flight credit on an airline ticket is determined strictly by the operating airline’s fare rules. Non-refundable tickets typically qualify only for airline travel credits minus applicable carrier fees.',
      },
      {
        heading: '3. Support Contact:',
        text: 'For questions regarding a recent service charge or itinerary status, contact our 24/7 support desk at (888) 990-9020.',
      },
    ],
  },
};

const serviceCards = [
  {
    icon: 'fa-calendar-days',
    label: 'Existing Tickets',
    title: 'Flight Changes & Rescheduling',
    description:
      'Need to leave earlier, extend your stay, or adjust your departure airport? We check real-time seat inventory and fare rules on your existing reservation.',
    bullets: [
      'Modify travel dates, departure times, or connection routes',
      'Same-day flight switch & standby options across airlines',
      'Upfront breakdown of airline fare difference + agency fee',
    ],
    footer: 'All Airlines Supported',
    call: 'Change Flight',
  },
  {
    icon: 'fa-ban',
    label: 'Cancellations',
    title: 'Flight Cancellations & Credit Assistance',
    description:
      'Avoid forfeiting the value of your ticket due to missed deadlines. We review your fare class to help cancel reservations and preserve airline flight credits or eligible refunds.',
    bullets: [
      '24-hour risk-free cancellation window assistance',
      'Refund eligibility & future travel credit verification',
      'Prompt cancellation before scheduled departure to prevent no-show loss',
    ],
    footer: '24/7 Cancellation Desk',
    call: 'Cancel Flight',
  },
  {
    icon: 'fa-id-card',
    label: 'Passenger Details',
    title: 'Name Changes & Ticket Corrections',
    description:
      'A typo on your boarding pass can cause TSA or gate delays. We assist with permitted spelling corrections and legal name updates in compliance with each airline’s rules.',
    bullets: [
      'Minor spelling typos, middle name additions & inverted names',
      'Legal name updates (marriage/divorce) per carrier documentation rules',
      'Ticket re-issuance & Secure Flight passenger data updates',
    ],
    footer: 'Subject to Airline Policy',
    call: 'Correct Name',
  },
  {
    icon: 'fa-ticket',
    label: 'New Reservations',
    title: 'New Flight Bookings',
    description:
      'Skip confusing fare restrictions and endless browser tabs. Tell our agents your destination and dates, and we will compare routes, baggage rules, and seat options for you.',
    bullets: [
      'One-way, round-trip, and multi-city domestic & international flights',
      'Last-minute / urgent travel bookings & family group itineraries',
      'Instant e-ticket confirmation emailed directly after booking',
    ],
    footer: 'Domestic & International',
    call: 'Book Flight',
  },
];

const faqs = [
  {
    question: 'Is Flights-Service.com affiliated with any specific airline?',
    answer: (
      <>
        No. <strong>Flights-Service.com</strong> is a completely independent third-party travel
        assistance agency. We are not owned by, affiliated with, or endorsed by any airline. Because
        we operate independently, we can assist you with reservations across virtually any domestic
        or international airline from one single support number: <strong>{PHONE}</strong>.
      </>
    ),
  },
  {
    question: 'How do your service fees and commissions work?',
    answer:
      'As an independent agency, we charge a transparent service fee / commission for handling your flight booking, change, cancellation, or name correction request. This agency fee is separate from any fare difference, change penalty, or cancellation fee charged by the airline itself. Your agent will always state the exact airline charges and our agency service fee upfront before you authorize any transaction.',
  },
  {
    question: "Can you change a passenger's name or fix a spelling mistake on an existing ticket?",
    answer:
      'Yes, within airline guidelines. Most airlines allow minor spelling corrections (typically up to 3 characters), adding/removing a middle name, or legal name updates (such as marriage or divorce with supporting ID) on unused segments. Full transfer of a ticket to a completely different person is generally restricted by airline rules, in which case we can help evaluate cancellation and rebooking options.',
  },
  {
    question: 'How quickly are flight changes, cancellations, or new bookings processed?',
    answer:
      'Most requests are completed during a single phone call within minutes. Once confirmed, updated e-tickets, cancellation receipts, or new itineraries are delivered immediately to your email address.',
  },
];

const Icon = ({ name, className = '' }) => (
  <i className={`fa-solid ${name} ${className}`} aria-hidden="true" />
);

function Logo({ footer = false }) {
  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <div
        className={`${
          footer ? 'w-9 h-9 rounded-lg' : 'w-10 h-10 rounded-xl'
        } bg-navy-900 text-white flex items-center justify-center shadow-md group-hover:bg-navy-800 transition-colors`}
      >
        <Icon name="fa-plane-departure" className="text-amber-400 text-lg" />
      </div>
      <div>
        <span
          className={`${
            footer ? 'text-xl' : 'text-xl'
          } font-extrabold tracking-tight text-navy-900 block leading-none`}
        >
          Flights-Service<span className="text-emerald-600">.com</span>
        </span>
        {!footer && (
          <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
            24/7 Reservation Desk
          </span>
        )}
      </div>
    </a>
  );
}

function CallButton({ children = PHONE, className = '' }) {
  return (
    <a href={PHONE_LINK} className={className}>
      {children}
    </a>
  );
}

function CallbackForm() {
  const [feedback, setFeedback] = useState(null);

  const [formData, setFormData] = useState({
    serviceType: 'Flight Change / Reschedule',
    tripType: 'Domestic Flight',
    pnrCode: '',
    passengerName: '',
    phoneNumber: '',
    disclosureAgree: false,
  });

  const updateField = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.tripType || !formData.passengerName.trim() || !formData.phoneNumber.trim()) {
      setFeedback({
        type: 'error',
        message: 'Please fill in your Trip Type, Full Name, and Phone Number.',
      });
      return;
    }

    if (!formData.disclosureAgree) {
      setFeedback({
        type: 'error',
        message:
          'Please check the box acknowledging our independent agency status and service fee.',
      });
      return;
    }

    const refCode = `FS-${Math.floor(100000 + Math.random() * 900000)}`;

    setFeedback({
      type: 'success',
      refCode,
      name: formData.passengerName,
      tripType: formData.tripType,
      serviceType: formData.serviceType,
      phoneNumber: formData.phoneNumber,
    });

    setFormData({
      serviceType: 'Flight Change / Reschedule',
      tripType: 'Domestic Flight',
      pnrCode: '',
      passengerName: '',
      phoneNumber: '',
      disclosureAgree: false,
    });
  };

  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 focus:border-navy-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-800/20';

  return (
    <div className="bg-white text-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Request a Priority Callback</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Prefer we call you? Submit your request below.
          </p>
        </div>
        <span className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <Icon name="fa-clock-rotate-left" />
        </span>
      </div>

      {feedback && (
        <div
          className={`mb-4 p-4 rounded-xl text-sm font-medium border ${
            feedback.type === 'error'
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200'
          }`}
          role="status"
        >
          {feedback.type === 'error' ? (
            <>
              <Icon name="fa-circle-exclamation" className="mr-1.5" />
              {feedback.message}
            </>
          ) : (
            <div className="flex items-start gap-2.5">
              <Icon name="fa-circle-check" className="text-emerald-600 text-lg mt-0.5" />
              <div>
                <p className="font-bold">Callback Request Received (Ref: {feedback.refCode})</p>
                <p className="text-xs mt-1">
                  Thank you, <strong>{feedback.name}</strong>. A specialist for your{' '}
                  <strong>{feedback.tripType}</strong> ({feedback.serviceType}) will call{' '}
                  <strong>{feedback.phoneNumber}</strong> shortly. For immediate priority, call{' '}
                  <a href={PHONE_LINK} className="underline font-bold">
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label
            htmlFor="serviceType"
            className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1"
          >
            How Can We Help? <span className="text-red-500">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={updateField}
            required
            className={inputClass}
          >
            <option value="Flight Change / Reschedule">Flight Change / Reschedule</option>
            <option value="Flight Cancellation / Refund Check">
              Flight Cancellation / Refund Check
            </option>
            <option value="Name Change / Spelling Correction">
              Name Change / Spelling Correction
            </option>
            <option value="New Flight Booking">New Flight Booking</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="tripType"
              className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1"
            >
              Trip / Route Type <span className="text-red-500">*</span>
            </label>
            <select
              id="tripType"
              name="tripType"
              value={formData.tripType}
              onChange={updateField}
              required
              className={inputClass}
            >
              <option value="Domestic Flight">Domestic Flight</option>
              <option value="International Flight">International Flight</option>
              <option value="Round-Trip Itinerary">Round-Trip Itinerary</option>
              <option value="One-Way / Multi-City">One-Way / Multi-City</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="pnrCode"
              className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1"
            >
              Confirmation / PNR <span className="text-slate-400 font-normal">(Opt.)</span>
            </label>
            <input
              type="text"
              id="pnrCode"
              name="pnrCode"
              value={formData.pnrCode}
              onChange={updateField}
              placeholder="e.g., ABC123"
              maxLength={10}
              className={`${inputClass} uppercase`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="passengerName"
              className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1"
            >
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="passengerName"
              name="passengerName"
              value={formData.passengerName}
              onChange={updateField}
              placeholder="John Doe"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={updateField}
              placeholder="(555) 234-5678"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer bg-slate-50 p-3 rounded-xl border border-slate-200">
            <input
              type="checkbox"
              name="disclosureAgree"
              checked={formData.disclosureAgree}
              onChange={updateField}
              required
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-navy-800"
            />
            <span className="text-xs text-slate-600 leading-snug">
              I understand <strong>Flights-Service.com</strong> is an independent third-party travel
              agency (not an airline) and charges a service fee/commission in addition to any
              airline fare or penalty.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Icon name="fa-paper-plane" />
          <span>Request Agent Callback</span>
        </button>
      </form>

      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          Need immediate assistance? Call{' '}
          <CallButton className="font-bold text-navy-900 underline hover:text-emerald-600">
            {PHONE}
          </CallButton>
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="bg-navy-950 text-slate-200 text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <p>
            <Icon name="fa-circle-info" className="text-amber-400 mr-1.5" />
            <strong>Independent Travel Assistance Agency:</strong> Flights-Service.com is not
            affiliated with any airline. Service fees/commissions apply.
          </p>
          <span className="text-emerald-400 font-medium whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1" />
            Agents Available 24/7
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-navy-900 transition-colors">
              Services
            </a>
            <a href="#how-it-works" className="hover:text-navy-900 transition-colors">
              How It Works
            </a>
            <a href="#transparency" className="hover:text-navy-900 transition-colors">
              Fee Transparency
            </a>
            <a href="#faq" className="hover:text-navy-900 transition-colors">
              FAQ
            </a>
            <a href="#policies" className="hover:text-navy-900 transition-colors">
              Policies
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Toll-Free 24/7 Desk
              </p>
              <p className="text-xs font-medium text-emerald-700">Zero Hold-Time Routing</p>
            </div>
            <CallButton className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-4 sm:px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap">
              <Icon name="fa-phone-volume" className="animate-bounce" />
              <span>{PHONE}</span>
            </CallButton>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs sm:text-sm font-semibold">
              <Icon name="fa-headset" />
              <span>Independent Multi-Airline Support Desk</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              24/7 Flight Reservation Assistance —{' '}
              <span className="text-amber-400">Changes, Cancellations</span> & New Bookings
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Need urgent help modifying an existing itinerary, canceling a flight, correcting a
              misspelled passenger name, or booking a new ticket? Our independent travel specialists
              assist with reservations across{' '}
              <strong>all major domestic and international airlines</strong>.
            </p>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 sm:p-6 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                    Speak With a Live Specialist
                  </span>
                  <CallButton className="text-2xl sm:text-3xl font-extrabold text-white hover:text-amber-300 transition-colors flex items-center gap-2.5">
                    <Icon name="fa-phone" className="text-emerald-400 text-xl" />
                    {PHONE}
                  </CallButton>
                  <p className="text-xs text-slate-300 mt-1">
                    Available 24/7/365 • Transparent Service Fee Quoted Upfront
                  </p>
                </div>
                <CallButton className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                  <span>Call Toll-Free</span>
                  <Icon name="fa-arrow-right" className="text-sm" />
                </CallButton>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Assistance Available Across All Major Carriers & Fare Classes:
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-200">
                {[
                  'Domestic Flights',
                  'International Routes',
                  'Major Commercial Carriers',
                  'Low-Cost & Regional Airlines',
                  'One-Way & Round-Trip',
                  'Multi-City Itineraries',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-navy-950/60 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CallbackForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function TransparencyBanner() {
  return (
    <section
      id="transparency"
      className="bg-amber-50 border-y border-amber-200/80 py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
          <Icon name="fa-scale-balanced" className="text-xl" />
        </div>
        <div className="text-sm text-slate-700 leading-relaxed">
          <h3 className="font-bold text-navy-900 text-base mb-0.5">
            Important Service & Pricing Transparency
          </h3>
          <p>
            <strong>Flights-Service.com</strong> operates strictly as an{' '}
            <strong>independent third-party travel assistance agency</strong> and is not affiliated
            with, endorsed by, or acting on behalf of any airline. We charge an agency{' '}
            <strong>service fee / commission</strong> for processing flight changes, cancellations,
            name corrections, and new bookings. Our service fee is separate from any airline-imposed
            fare differences, change fees, or cancellation penalties, and is always disclosed to you
            for approval before any payment is processed.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Comprehensive Flight Desk
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-3">
          How Our Travel Specialists Can Assist You
        </h2>
        <p className="text-slate-600 mt-3 text-base sm:text-lg">
          Whether your travel plans shifted unexpectedly or you need a complex multi-city booking,
          our desk handles the legwork across all major carriers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceCards.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center text-xl">
                  <Icon name={service.icon} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {service.label}
                </span>
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>

              <ul className="space-y-2.5 text-sm text-slate-700 mb-6">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <Icon name="fa-circle-check" className="text-emerald-600 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">{service.footer}</span>
              <CallButton className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800">
                <Icon name="fa-phone" />
                <span>
                  {service.call}: {PHONE}
                </span>
              </CallButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: 'Call or Request a Callback',
      text: (
        <>
          Dial <CallButton className="text-amber-300 font-semibold underline">{PHONE}</CallButton>{' '}
          or submit the callback form with your airline name and desired change, cancellation, name
          correction, or new trip details.
        </>
      ),
    },
    {
      title: 'Review Options & Service Fee',
      text: 'Your specialist checks airline rules and presents available flights or refund/credit options, clearly itemizing any airline fare difference plus our agency service fee/commission.',
    },
    {
      title: 'Instant Confirmation',
      text: 'Once you approve the total cost, we finalize your reservation update or new ticket and send your updated airline confirmation number straight to your email.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-navy-900 text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Simple & Transparent Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">How It Works</h2>
          <p className="text-slate-300 mt-3 text-sm sm:text-base">
            Get your flight itinerary resolved in three straightforward steps with complete cost
            clarity before you commit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-navy-800/70 border border-white/10 rounded-2xl p-7">
              <div
                className={`w-11 h-11 rounded-xl ${
                  index === 2 ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-navy-950'
                } font-extrabold text-lg flex items-center justify-center mb-5 shadow-md`}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Ready to Update or Book Your Flight?</h3>
            <p className="text-slate-300 text-sm mt-1">
              Our travel desk is open 24 hours a day, 7 days a week.
            </p>
          </div>
          <CallButton className="w-full md:w-auto text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3">
            <Icon name="fa-phone-volume" />
            <span>Call {PHONE}</span>
          </CallButton>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-navy-700 bg-slate-200/70 px-3 py-1 rounded-full">
          Common Questions
        </span>
        <h2 className="text-3xl font-extrabold text-navy-900 mt-3">Frequently Asked Questions</h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          Everything you need to know about our independent travel assistance services, fees, and
          airline rules.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-navy-900 hover:bg-slate-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <Icon
                  name="fa-chevron-down"
                  className={`text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}


function Footer({ onOpenPolicy }) {
  const year = new Date().getFullYear();

  return (
    <footer
      id="policies"
      className="bg-navy-950 text-slate-300 pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-t border-navy-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-navy-800">
          {/* Company */}
          <div className="md:col-span-4 space-y-3">
            <Logo footer />

            <p className="text-sm text-slate-400 leading-relaxed">
              24/7 independent flight reservation and itinerary support desk helping travelers with
              flight changes, cancellations, name corrections, and new bookings across major
              airlines.
            </p>

            <div className="pt-1">
              <CallButton className="inline-flex items-center gap-2 text-lg font-bold text-emerald-400 hover:text-emerald-300">
                <Icon name="fa-phone" />
                <span>{PHONE}</span>
              </CallButton>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-2.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Flight Changes & Rescheduling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Flight Cancellations & Credits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Name Corrections on Tickets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  New Domestic & Intl Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal & Policies
            </h4>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPolicy('refund')}
                  className="hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4"
                >
                  Service Fee & Refund Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Information
            </h4>

            <div className="space-y-3 text-sm text-slate-400">
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Icon name="fa-envelope" />
                <a
                  href="mailto:flightsservice17@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  flightsservice17@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Icon name="fa-phone" />
                <CallButton className="hover:text-white transition-colors">{PHONE}</CallButton>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <Icon name="fa-location-dot" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=30+N+Gould+St%2C+Sheridan%2C+WY+82801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  30 N Gould St,
                  <br />
                  Sheridan, WY 82801,
                  <br />
                  United States
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="py-8 space-y-4 text-xs text-slate-400 leading-relaxed border-b border-navy-800">
          <p>
            <strong className="text-slate-200">Independent Agency Disclaimer:</strong>{' '}
            Flights-Service.com is an independent third-party travel assistance service and online
            travel agency. We are not affiliated with, endorsed by, sponsored by, or directly
            connected to any airline or aviation carrier. All airline names, logos, and trademarks
            mentioned on this website are the property of their respective owners and are used
            strictly for descriptive identification purposes.
          </p>

          <p>
            <strong className="text-slate-200">Service Fee & Commission Disclosure:</strong>{' '}
            Flights-Service.com charges a service fee / commission for travel consultation, flight
            booking, itinerary modification, cancellation assistance, and passenger name correction
            services. Our agency service fees are separate from, and in addition to, any base
            airfare, government taxes, fare differences, or change/cancellation penalties imposed by
            the operating airline. All applicable fees are disclosed prior to purchase.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} Flights-Service.com. All rights reserved.</p>

          <p>
            24/7 Support Line:{' '}
            <CallButton className="text-slate-300 hover:text-white font-semibold">
              {PHONE}
            </CallButton>
          </p>
        </div>
      </div>
    </footer>
  );
}


function PolicyModal({ policy, onClose }) {
  if (!policy) return null;

  const content = policies[policy];

  if (!content) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white text-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-navy-900 text-white flex items-center justify-between">
          <h3 className="text-lg font-bold">{content.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <Icon name="fa-xmark" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          {content.content.map((item) => (
            <p key={item.heading}>
              <strong>{item.heading}</strong> {item.text}
            </p>
          ))}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-navy-800 selection:text-white pb-20 md:pb-0 min-h-screen">
      <Header />
      <Hero />
      <TransparencyBanner />
      <Services />
      <HowItWorks />
      <FAQ />
      <Footer onOpenPolicy={setActivePolicy} />

      {/* Mobile Sticky Call Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-navy-950/95 backdrop-blur-md border-t border-white/15 p-3 shadow-2xl">
        <CallButton className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 text-base active:scale-95 transition-transform">
          <Icon name="fa-phone-volume" className="animate-pulse" />
          <span>Call 24/7 Desk: {PHONE}</span>
        </CallButton>
      </div>

      <PolicyModal policy={activePolicy} onClose={() => setActivePolicy(null)} />
    </div>
  );
}
