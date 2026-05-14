'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    volume: '',
    industry: 'Forex Brokers',
    message: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent('FX Clearing Hub Contact Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nMonthly Volume: ${formData.volume}\nIndustry: ${formData.industry}\nMessage: ${formData.message}`
    );

    window.location.href = `mailto:support@fxclearinghub.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="volume" className="block text-sm font-medium text-gray-700">Monthly Volume</label>
        <input
          type="text"
          id="volume"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
        >
          <option>Forex Brokers</option>
          <option>Online Gaming</option>
          <option>Crypto Platforms</option>
          <option>Affiliate Networks</option>
          <option>E-commerce High Risk</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
