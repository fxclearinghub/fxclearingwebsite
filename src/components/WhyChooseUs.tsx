export default function WhyChooseUs() {
  const reasons = [
    'High-risk underwriting expertise',
    'Pre-established banking network',
    'Fast onboarding (3–7 days)',
    'Global payment coverage',
    'Scalable infrastructure'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose FX Clearing Hub</h2>
        <ul className="list-disc list-inside space-y-4 max-w-2xl mx-auto">
          {reasons.map((reason, index) => (
            <li key={index} className="text-lg">{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}