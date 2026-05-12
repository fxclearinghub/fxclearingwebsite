export default function Blog() {
  const posts = [
    'Why Forex Brokers Get Declined by Banks',
    'How to Reduce Chargebacks in High-Risk Industries',
    'Best Payment Methods for Online Gaming Platforms',
    'Offshore vs Local Merchant Accounts'
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{post}</h2>
            <p className="text-gray-600 mb-4">Coming soon...</p>
            <button className="text-blue-600 hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </main>
  );
}