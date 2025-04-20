import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { FaCheckCircle, FaBuilding, FaTools, FaUsers, FaEye, FaFlag, FaBullseye, FaHandshake } from 'react-icons/fa';
import Link from 'next/link';

export default function About() {
  const services = [
    "Data Centers",
    "HVAC & Precision Cooling Products",
    "Critical Power Equipment",
    "Electrical & Electro-Mechanical Systems",
    "Networks",
    "IBMS & Critical Monitoring Solutions",
    "Facility Operations",
    "Interior & Civil Solutions"
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Team Members" },
    { number: "50+", label: "Active Clients" }
  ];

  const visionPoints = [
    "To be pioneer into MEP Industry.",
    "To meet the ever-growing commercial demand for practical experience and professional expertise within this sector.",
    "To achieve the recognition and status of being INDIA&apos;s preferred and leading building services company in our own Specialized Fields.",
    "To give &apos;TURN-KEY SOLUTIONS&apos; to the client."
  ];

  const missionPoints = [
    "Guided by our vision we shall deliver high-quality, cost-effective projects on schedule and enhance our client&apos;s satisfaction through continuous improvement of our business practices in terms of safety, quality, service delivery as well as sound environmental awareness policies.",
    "To conduct Business with Honesty and Transparency.",
    "To Retain customer&apos;s Trust and Satisfaction by serving valuable benefits."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shree Venkatesh Enterprises</h1>
              <p className="text-xl opacity-90">Leading MEP Solutions Provider in India</p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Company</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Shree Venkatesh Enterprises is a premier Mechanical, Electrical and Plumbing contracting company in INDIA. 
                  We specialize in comprehensive solutions for modern infrastructure needs, offering expertise in design, 
                  build, construction, supply, installation, service, upgrades, and maintenance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With over 15 years of industry experience, we have established ourselves as a trusted partner for 
                  businesses seeking reliable and efficient MEP solutions. Our commitment to quality and innovation 
                  has made us a preferred choice in the industry.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-custom">
                <Image
                  src="/images/about-company.jpg"
                  alt="Shree Venkatesh Enterprises Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-custom">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <FaEye className="text-2xl text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <ul className="space-y-4">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaBullseye className="text-primary mt-1.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-custom">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <FaFlag className="text-2xl text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <ul className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <FaHandshake className="text-primary mt-1.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-600">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-custom">
                  <FaCheckCircle className="text-primary text-2xl mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBuilding className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Industry Experience</h3>
                <p className="text-gray-600">Over 15 years of expertise in MEP solutions and infrastructure development.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTools className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Solutions</h3>
                <p className="text-gray-600">End-to-end services from design and construction to maintenance and upgrades.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                <p className="text-gray-600">Skilled professionals dedicated to delivering excellence in every project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your MEP requirements and get a customized solution for your infrastructure needs.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 