import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaBolt, FaCog, FaTools, FaIndustry, FaLightbulb, FaServer, FaHardHat, FaSolarPanel, FaPaintRoller, FaBuilding } from 'react-icons/fa';
import Link from 'next/link';

export default function ElectricalServices() {
  const electricalProjects = [
    {
      title: "Substation & Power Distribution",
      description: "Complete solutions for substation work, electric panels, LT & HT cabling, and overhead transmission lines and towers.",
      icon: <FaBolt />
    },
    {
      title: "Electrical Systems",
      description: "Main and sub-main switch boards, earthing systems, and comprehensive internal/external electrification.",
      icon: <FaCog />
    },
    {
      title: "Lighting Solutions",
      description: "Street lighting, flood lighting, park lighting systems with modern energy-efficient solutions.",
      icon: <FaLightbulb />
    },
    {
      title: "Critical Infrastructure",
      description: "Installation & commissioning of diesel sets, transformers, UPS systems, and data center infrastructure.",
      icon: <FaServer />
    },
    {
      title: "Communication & Safety",
      description: "Instrumentation systems, communication systems, and fire fighting system installation.",
      icon: <FaTools />
    },
    {
      title: "Cable Management",
      description: "Cable design and routing, cable tray and trunking solutions with professional installation.",
      icon: <FaIndustry />
    }
  ];

  const serviceFeatures = [
    {
      title: "Design & Planning",
      points: [
        "Design and conceptualization based on customer requirements",
        "Preparation of bill of quantities and tendering",
        "Detailed drawings and site set out",
        "Material sourcing and quality control"
      ]
    },
    {
      title: "Execution & Management",
      points: [
        "Precise marking and execution per design",
        "Obtaining finished levels",
        "Regular progress evaluation and reporting",
        "Total commissioning and handover"
      ]
    }
  ];

  const interiorSolutions = [
    {
      title: "Office Interiors",
      description: "Complete office interior design and execution services.",
      icon: <FaBuilding />
    },
    {
      title: "Clean Room Solutions",
      description: "Professional clean room paneling works with industry standards.",
      icon: <FaHardHat />
    },
    {
      title: "Specialized Flooring",
      description: "Epoxy floor painting & water proofing works.",
      icon: <FaPaintRoller />
    },
    {
      title: "Solar Solutions",
      description: "Comprehensive solar works and renewable energy solutions.",
      icon: <FaSolarPanel />
    },
    {
      title: "Lab Infrastructure",
      description: "Lab shifting works and specialized laboratory setups.",
      icon: <FaTools />
    },
    {
      title: "SS Components",
      description: "SS cross over benches, rack systems & equipment-allied SS components.",
      icon: <FaCog />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Electrical & Interior Solutions</h1>
              <p className="text-xl opacity-90">Turn-key Electrical Projects & Comprehensive Interior Solutions</p>
            </div>
          </div>
        </section>

        {/* Electrical Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Electrical Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {electricalProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
                  <div className="text-primary text-2xl mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Main Features of Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-custom">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{feature.title}</h3>
                  <ul className="space-y-4">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCog className="text-primary mt-1.5 mr-3 flex-shrink-0" />
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interior & Civil Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Interior & Civil Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interiorSolutions.map((solution, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
                  <div className="text-primary text-2xl mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing & Equipment */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Testing & Equipment</h2>
              <p className="text-gray-600 text-lg mb-8">
                We maintain a comprehensive suite of measuring and test equipment required for inspection, calibration, 
                and testing of installations at site. Our team ensures all installations meet the highest quality standards 
                and safety requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your electrical, interior, or civil requirements.
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