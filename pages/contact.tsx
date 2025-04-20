import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTools, FaShoppingCart } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactDetails = {
    address: {
      line1: "Sr no 71/1+2 Krishna nagar",
      line2: "Near Master Mind School",
      line3: "New Sangvi, Pune 411027",
      icon: <FaMapMarkerAlt />
    },
    email: {
      address: "shreevenkateshaenterprises24@gmail.com",
      icon: <FaEnvelope />
    },
    contacts: [
      {
        title: "Engineering Projects Service",
        people: [
          {
            name: "Mr. Suraj Bole",
            phone: "+91 9822390550",
          },
          {
            name: "Mr. Rahul Bolkotagi",
            phone: "+91 9823981305",
          }
        ],
        icon: <FaTools />
      },
      {
        title: "Sales",
        people: [
          {
            name: "Mr. Nilesh Madhawai",
            phone: "+91 7028706703",
          }
        ],
        icon: <FaShoppingCart />
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get in touch with us for all your MEP solution needs
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Engineering Projects Service */}
                <div className="flex items-start">
                  <FaTools className="text-primary dark:text-yellow-300 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Engineering Projects Service</h3>
                    <p className="text-gray-600 dark:text-gray-300">Mr. Suraj Bole: +91 9822390550</p>
                    <p className="text-gray-600 dark:text-gray-300">Mr. Rahul Bolkotagi: +91 9823981305</p>
                  </div>
                </div>

                {/* Sales */}
                <div className="flex items-start">
                  <FaShoppingCart className="text-primary dark:text-yellow-300 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Sales</h3>
                    <p className="text-gray-600 dark:text-gray-300">Mr. Nilesh Madhawai: +91 7028706703</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <FaEnvelope className="text-primary dark:text-yellow-300 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:shreevenkateshaenterprises24@gmail.com" className="hover:text-primary">
                        shreevenkateshaenterprises24@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-primary dark:text-yellow-300 mt-1 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Branch Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sr no 71/1+2 Krishna nagar<br />
                      Near Master Mind School<br />
                      New Sangvi, Pune 411027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="mechanical">Mechanical Services</option>
                      <option value="electrical">Electrical Services</option>
                      <option value="civil">Civil & Interior Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Location
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7168214407687!2d73.81661!3d18.578897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90ea49d2c77%3A0x3c3c3d01c68858f7!2sKrishna%20Nagar%2C%20New%20Sangvi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411027!5e0!3m2!1sen!2sin!4v1625641411576!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Branch Office */}
              <div className="bg-white rounded-lg shadow-custom p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    {contactDetails.address.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Branch Office</h2>
                </div>
                <div className="text-gray-600 text-lg space-y-1 ml-16">
                  <p>{contactDetails.address.line1}</p>
                  <p>{contactDetails.address.line2}</p>
                  <p>{contactDetails.address.line3}</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-custom p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    {contactDetails.email.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Email</h2>
                </div>
                <div className="text-gray-600 text-lg ml-16">
                  <a href={`mailto:${contactDetails.email.address}`} className="text-primary hover:underline">
                    {contactDetails.email.address}
                  </a>
                </div>
              </div>

              {/* Contact Sections */}
              {contactDetails.contacts.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-custom p-8 mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="space-y-6 ml-16">
                    {section.people.map((person, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="text-gray-900 font-semibold mb-2 md:mb-0">{person.name}</div>
                        <a 
                          href={`tel:${person.phone}`} 
                          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                        >
                          <FaPhone className="mr-2" />
                          {person.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 