export default function Solutions() {
  const solutions = [
    {
      title: 'Card Processing',
      description: 'Visa & Mastercard solutions tailored for high-risk merchants.'
    },
    {
      title: 'Alternative Payments',
      description: 'APMs, e-wallets, and local payment methods.'
    },
    {
      title: 'Multi-Currency Accounts',
      description: 'Accept and settle payments globally.'
    },
    {
      title: 'Fraud & Chargeback Tools',
      description: 'Protect your business and improve approval rates.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}