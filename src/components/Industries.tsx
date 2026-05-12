export default function Industries() {
  const industries = [
    'Forex Brokers',
    'Online Gaming / iGaming',
    'Crypto Platforms',
    'Affiliate Networks',
    'E-commerce High Risk'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏢</span> {/* Placeholder icon */}
              </div>
              <p className="font-semibold">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}