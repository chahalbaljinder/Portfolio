import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-10 sm:pt-20 bg-gray-50 relative">
      {submitted && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center">
          <Check className="mr-2" />
          Message sent successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            
            <div className="space-y-4 sm:space-y-6">
              <ContactInfo
                icon={<Phone className="w-5 h-5 sm:w-6 sm:h-6" />}
                title="Phone"
                content="+91 8810225755"
                href="tel:+918810225755"
              />
              <ContactInfo
                icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6" />}
                title="Email"
                content="balliji913@gmail.com"
                href="mailto:balliji913@gmail.com"
              />
              <ContactInfo
                icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6" />}
                title="Location"
                content="Delhi, India 110092"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-lg shadow-md p-6 w-full"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, content, href }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}) => (
  <div className="flex items-start space-x-3 sm:space-x-4">
    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="text-base sm:text-lg font-medium text-gray-900">{title}</h3>
      {href ? (
        <a href={href} className="text-sm sm:text-base text-gray-600 hover:text-blue-600">
          {content}
        </a>
      ) : (
        <p className="text-sm sm:text-base text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;