import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Project categories
const categories = [
  'All',
  'Commercial',
  'Industrial',
  'Healthcare',
  'Residential'
];

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Tech Park Development',
    category: 'Commercial',
    location: 'Bangalore',
    description: 'Complete MEP solutions for a state-of-the-art tech park including HVAC, electrical systems, and smart building automation.',
    image: '/images/projects/tech-park.jpg',
    stats: {
      area: '2M sq ft',
      duration: '18 months'
    },
    features: ['HVAC Design', 'Electrical Systems', 'Building Automation', 'Energy Management']
  },
  {
    id: 2,
    title: 'Manufacturing Facility',
    category: 'Industrial',
    location: 'Pune',
    description: 'Industrial-grade electrical and mechanical systems for a leading manufacturing facility.',
    image: '/images/projects/manufacturing.jpg',
    stats: {
      area: '1.5M sq ft',
      duration: '12 months'
    },
    features: ['Power Distribution', 'Process Piping', 'Industrial HVAC', 'Safety Systems']
  },
  {
    id: 3,
    title: 'Multi-Specialty Hospital',
    category: 'Healthcare',
    location: 'Mumbai',
    description: 'Critical care infrastructure with advanced medical gas systems and backup power solutions.',
    image: '/images/projects/hospital.jpg',
    stats: {
      area: '500K sq ft',
      duration: '24 months'
    },
    features: ['Medical Gas Systems', 'HVAC', 'Backup Power', 'Fire Safety']
  },
  {
    id: 4,
    title: 'Luxury Residential Complex',
    category: 'Residential',
    location: 'Hyderabad',
    description: 'Modern residential complex with smart home features and energy-efficient systems.',
    image: '/images/projects/residential.jpg',
    stats: {
      area: '800K sq ft',
      duration: '15 months'
    },
    features: ['Smart Home Integration', 'Energy Management', 'Water Management', 'Security Systems']
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Our Projects | Shree Venkatesh Enterprises</title>
        <meta name="description" content="Explore our portfolio of successful MEP projects across various sectors including commercial, industrial, and residential developments." />
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
                  Our Project Portfolio
                </h1>
                <p className="text-xl md:text-2xl text-gray-100">
                  Discover how we&apos;ve helped businesses achieve their infrastructure goals
                </p>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="bg-white border-b-3 border-gray-200">
            <div className="container py-6">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 font-semibold transition-all duration-300 border-3 ${
                      selectedCategory === category
                        ? 'border-primary bg-primary text-white shadow-solid'
                        : 'border-gray-200 hover:border-primary text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16 bg-gray-50">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white border-3 border-gray-200 hover:border-primary transition-colors duration-300"
                  >
                    <div className="relative h-64 overflow-hidden border-b-3 border-gray-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-100 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 border-l-3 border-primary">
                          <p className="text-sm text-gray-500 mb-1">Area</p>
                          <p className="font-bold text-primary">{project.stats.area}</p>
                        </div>
                        <div className="bg-gray-50 p-4 border-l-3 border-secondary">
                          <p className="text-sm text-gray-500 mb-1">Duration</p>
                          <p className="font-bold text-secondary">{project.stats.duration}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span
                              key={feature}
                              className="bg-gray-100 text-gray-700 px-3 py-1 text-sm border-l-3 border-primary"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full bg-primary text-white py-4 font-semibold hover:bg-primary-dark transition-colors shadow-solid">
                        View Project Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary py-16">
            <div className="container text-center text-white">
              <h2 className="text-3xl font-bold mb-6 border-b-3 border-secondary inline-block pb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
                Let's discuss how we can bring your vision to life with our expertise
              </p>
              <button className="bg-secondary text-white px-8 py-4 font-semibold hover:bg-secondary-dark transition-colors shadow-solid-lg">
                Get in Touch
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 