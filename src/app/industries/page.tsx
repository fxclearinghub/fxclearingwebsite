export default function Industries() {
  const industries = [
    { name: 'Forex Brokers', link: '/forex-payment-processing' },
    { name: 'Online Gaming / iGaming', link: '/gaming-payment-solutions' },
    { name: 'Crypto Platforms', link: '#' },
    { name: 'Affiliate Networks', link: '#' },
    { name: 'E-commerce High Risk', link: '#' }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Industries We Serve</h1>
      <p className="text-lg mb-12 text-center">
        We specialize in industries that traditional banks avoid.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">{industry.name}</h2>
            <a href={industry.link} className="text-blue-600 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </main>
  );
}