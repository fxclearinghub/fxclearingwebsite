const industries = [
  {
    title: 'Forex Brokers',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="48" height="40" rx="6" fill="#BFDBFE" />
        <path d="M18 32H46" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 24H38" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 40H30" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Online Gaming / iGaming',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="44" height="28" rx="8" fill="#C7D2FE" />
        <circle cx="22" cy="32" r="5" fill="#4338CA" />
        <path d="M34 26H46" stroke="#4338CA" strokeWidth="4" strokeLinecap="round" />
        <path d="M34 38H46" stroke="#4338CA" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Crypto Platforms',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="22" fill="#DDD6FE" />
        <path d="M32 14V50" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 22L44 42" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
        <path d="M20 42L44 22" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Affiliate Networks',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18H28L36 42H48" stroke="#4338CA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="16" r="6" fill="#C7D2FE" />
        <circle cx="44" cy="46" r="6" fill="#C7D2FE" />
        <circle cx="28" cy="32" r="6" fill="#C7D2FE" />
      </svg>
    ),
  },
  {
    title: 'E-commerce High Risk',
    icon: (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 20H48L44 48H20L16 20Z" fill="#DBEAFE" stroke="#1D4ED8" strokeWidth="4" />
        <circle cx="24" cy="52" r="4" fill="#1D4ED8" />
        <circle cx="40" cy="52" r="4" fill="#1D4ED8" />
        <path d="M24 20V12H40V20" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {industry.icon}
              </div>
              <p className="font-semibold">{industry.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}