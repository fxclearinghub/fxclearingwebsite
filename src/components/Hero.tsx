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
            <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
              Get Approved
            </button>
            <button className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600">
              Speak to an Expert
            </button>
          </div>
          <p className="text-sm">
            Supporting global merchants across EU, Asia & LATAM
          </p>
        </div>
        <div className="md:w-1/2">
          {/* Placeholder for illustration */}
          <div className="bg-white bg-opacity-20 rounded-lg p-8 text-center">
            <p className="text-2xl">Illustration: Payments / Global Network</p>
          </div>
        </div>
      </div>
    </section>
  );
}