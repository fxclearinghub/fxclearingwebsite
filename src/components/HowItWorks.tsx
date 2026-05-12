export default function HowItWorks() {
  const steps = [
    'Submit Application',
    'Risk Assessment',
    'Bank Matching',
    'Integration',
    'Go Live'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <p className="text-center font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}