export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About FX Clearing Hub</h1>
      <p className="text-lg mb-8">
        FX Clearing Hub is a global payment solutions provider focused on high-risk industries.
      </p>
      <p className="text-lg mb-12">
        We work with a network of acquiring banks and payment partners to deliver reliable and scalable processing solutions.
      </p>

      <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
      <p className="text-lg mb-12">
        To provide stable and compliant payment infrastructure for businesses operating in complex industries.
      </p>

      <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>Deep expertise in high-risk sectors</li>
        <li>Global banking relationships</li>
        <li>Dedicated client support</li>
        <li>Scalable payment solutions</li>
      </ul>

      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
          Partner with Us
        </button>
      </div>
    </main>
  );
}