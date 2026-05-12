export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <p className="text-lg mb-12 text-center">
        Ready to start processing payments or need expert advice? Fill out the form below and our team will get back to you within 24 hours.
      </p>

      <div className="max-w-md mx-auto">
        <form action="mailto:support@fxclearinghub.com" method="post" encType="text/plain" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input type="text" id="company" name="company" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="volume" className="block text-sm font-medium text-gray-700">Monthly Volume</label>
            <input type="text" id="volume" name="volume" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
            <select id="industry" name="industry" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
              <option>Forex Brokers</option>
              <option>Online Gaming</option>
              <option>Crypto Platforms</option>
              <option>Affiliate Networks</option>
              <option>E-commerce High Risk</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: support@fxclearinghub.com</p>
      </div>
    </main>
  );
}