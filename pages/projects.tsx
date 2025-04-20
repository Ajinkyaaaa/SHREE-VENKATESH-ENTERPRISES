import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: "Commercial Complex",
    category: "Commercial",
    description: "Complete MEP solutions for a 50,000 sq ft commercial complex including HVAC, electrical, and plumbing systems.",
    image: "/images/projects/commercial.jpg",
    features: [
      "HVAC Design & Installation",
      "Power Distribution",
      "Water Management",
      "Fire Safety Systems"
    ]
  },
  {
    title: "Industrial Facility",
    category: "Industrial",
    description: "Turnkey electrical and mechanical solutions for a manufacturing facility with focus on energy efficiency.",
    image: "/images/projects/industrial.jpg",
    features: [
      "Substation Design",
      "Industrial Piping",
      "Process Automation",
      "Energy Management"
    ]
  },
  {
    title: "Healthcare Center",
    category: "Healthcare",
    description: "Specialized MEP systems for a healthcare facility ensuring 24/7 reliable operation.",
    image: "/images/projects/healthcare.jpg",
    features: [
      "Medical Gas Systems",
      "Emergency Power",
      "HVAC with HEPA",
      "Water Treatment"
    ]
  }
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Our Projects | Shree Venkatesh Enterprises</title>
        <meta name="description" content="Explore our portfolio of successful MEP projects across commercial, industrial, and healthcare sectors." />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our Projects
                </h1>
                <p className="text-xl md:text-2xl text-gray-100">
                  Showcasing our expertise in delivering complex MEP solutions
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="card card-hover">
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <FaArrowRight className="text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="btn-primary w-full text-center"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-white">
            <div className="container text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help bring your vision to life with our expert MEP solutions.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 