import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://portfolio-backend-uk94.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        
        {/* Email Address */}
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">Or email me directly:</p>
          <a 
            href="mailto:tafawafussy@gmail.com" 
            className="text-blue-600 dark:text-blue-400 hover:underline text-xl font-medium"
          >
            ✉️ tafawafussy@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
            required
          />
          <textarea
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition"
          >
            Send Message
          </button>

          {status && <p className="text-center font-medium mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;