import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stable Payment Infrastructure for High-Risk Merchants
          </h1>
          <p className="text-xl mb-6">
            Scalable, secure, and compliant payment solutions for forex brokers, gaming platforms, and high-risk businesses worldwide.
          </p>
          <div className="flex space-x-4 mb-6">
            <Link href="/contact#contact-form" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
              Get Approved
            </Link>
            <Link href="/contact#contact-form" className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600">
              Speak to an Expert
            </Link>
          </div>
          <p className="text-sm">
            Supporting global merchants across EU, Asia & LATAM
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative mx-auto max-w-md rounded-[2rem] bg-white/10 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
            <svg viewBox="0 0 520 420" fill="none" className="w-full h-auto" aria-hidden="true">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <rect x="24" y="44" width="220" height="140" rx="24" fill="url(#gradient)" opacity="0.95" />
              <rect x="48" y="72" width="172" height="24" rx="12" fill="white" opacity="0.9" />
              <rect x="48" y="108" width="112" height="16" rx="8" fill="white" opacity="0.7" />
              <rect x="48" y="136" width="148" height="16" rx="8" fill="white" opacity="0.7" />
              <path d="M190 106C230 86 270 86 310 106" stroke="white" strokeWidth="10" strokeLinecap="round" opacity="0.8" />
              <circle cx="330" cy="92" r="18" fill="#38bdf8" />
              <circle cx="338" cy="92" r="8" fill="white" />
              <circle cx="286" cy="154" r="18" fill="#a855f7" />
              <circle cx="294" cy="154" r="8" fill="white" />
              <path d="M338 92L286 154" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
              <circle cx="194" cy="246" r="18" fill="#60a5fa" />
              <circle cx="194" cy="246" r="8" fill="white" />
              <circle cx="420" cy="280" r="24" fill="#c084fc" />
              <circle cx="420" cy="280" r="10" fill="white" />
              <path d="M330 92L194 246" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
              <path d="M286 154L420 280" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
              <rect x="288" y="12" width="168" height="90" rx="22" fill="#e0e7ff" />
              <rect x="304" y="30" width="132" height="18" rx="9" fill="#4338ca" />
              <rect x="304" y="60" width="96" height="12" rx="6" fill="#818cf8" />
            </svg>
            <div className="mt-6 text-left text-sm text-white/80">
              <p className="font-semibold">Stable payments backed by global network intelligence.</p>
              <p className="mt-2">Secure routing, risk-aware processing, and cross-border settlement in one platform.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}