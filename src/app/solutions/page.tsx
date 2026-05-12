export default function Solutions() {
  const solutions = [
    { name: 'High-Risk Merchant Accounts', link: '/high-risk-merchant-account' },
    { name: 'Forex Payment Processing', link: '/forex-payment-processing' },
    { name: 'Gaming Payment Solutions', link: '/gaming-payment-solutions' }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Solutions</h1>
      <p className="text-lg mb-12 text-center">
        Comprehensive payment solutions for high-risk merchants.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">{solution.name}</h2>
            <a href={solution.link} className="text-blue-600 hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </main>
  );
}