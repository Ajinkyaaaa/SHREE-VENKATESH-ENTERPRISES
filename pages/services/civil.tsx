import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaFileAlt, FaPhoneAlt, FaBuilding, FaPaintRoller, FaTools } from 'react-icons/fa';

export default function CivilService() {
  const services = [
    {
      title: "Interior Design",
      description: "Modern and functional interior design solutions for commercial and residential spaces.",
      features: [
        "Space planning and layout design",
        "Material selection and specification",
        "Furniture and fixture selection",
        "Color scheme development",
        "3D visualization and rendering",
        "Sustainable design solutions"
      ],
      icon: <FaPaintRoller className="text-3xl text-primary dark:text-yellow-300" />
    },
    {
      title: "Construction Management",
      description: "End-to-end construction management services for various projects.",
      features: [
        "Project planning and scheduling",
        "Quality control and assurance",
        "Site supervision",
        "Contractor management",
        "Budget control",
        "Safety management"
      ],
      icon: <FaBuilding className="text-3xl text-primary dark:text-yellow-300" />
    },
    {
      title: "Renovation Services",
      description: "Complete renovation and remodeling solutions for existing structures.",
      features: [
        "Structural modifications",
        "Interior renovations",
        "Facade upgrades",
        "Space optimization",
        "Modern amenities integration",
        "Historical restoration"
      ],
      icon: <FaTools className="text-3xl text-primary dark:text-yellow-300" />
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "LEED Certified Professionals",
    "Class A Contractor License",
    "Safety Management Certified",
    "Green Building Certified"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-primary dark:text-yellow-300 hover:underline flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-800 dark:from-blue-900 dark:to-blue-700 text-white p-8 rounded-lg mb-12">
          <h1 className="text-4xl font-bold mb-4">Civil & Interior Services</h1>
          <p className="text-xl mb-6">Transform your space with our expert construction and design solutions</p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Request a Quote
            </Link>
            <a 
              href="tel:+1234567890" 
              className="bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center"
            >
              <FaPhoneAlt className="mr-2" /> Call Us Now
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-8 dark:text-white">Our Civil & Interior Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-yellow-300">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <FaFileAlt className="text-primary dark:text-yellow-300 mr-3 text-xl" />
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-secondary to-orange-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Space?</h2>
          <p className="mb-6">Contact us today for a free consultation and quote for your construction and interior design needs.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors"
          >
            Contact Us Now
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
} 