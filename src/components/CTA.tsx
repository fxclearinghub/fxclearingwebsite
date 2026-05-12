export default function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Payments?</h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
            Get Started
          </button>
          <button className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}