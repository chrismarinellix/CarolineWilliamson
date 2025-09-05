'use client'

import { useState } from 'react'
import { Mail, Phone, Linkedin, Download, ArrowLeft, Menu, X } from 'lucide-react'
import { cvData } from '../data/cv-data'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a href="../../tech-showcase.html" className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors">
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Tech Showcase</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('summary')} className="text-gray-600 hover:text-primary-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-primary-500 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('results')} className="text-gray-600 hover:text-primary-500 transition-colors">
                Results
              </button>
              <button className="btn-primary">
                <Download size={16} className="mr-2" />
                Download CV
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => scrollToSection('summary')} className="block w-full text-left py-2 text-gray-600">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-gray-600">
                Experience
              </button>
              <button onClick={() => scrollToSection('results')} className="block w-full text-left py-2 text-gray-600">
                Results
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-light text-gray-850 mb-4">
                {cvData.personal.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gradient font-semibold mb-8">
                {cvData.personal.title}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a href={`tel:${cvData.personal.phone}`} className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Phone size={20} className="text-primary-500" />
                  <span className="font-medium">{cvData.personal.phone}</span>
                </a>
                <a href={`mailto:${cvData.personal.email}`} className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Mail size={20} className="text-primary-500" />
                  <span className="font-medium">{cvData.personal.email}</span>
                </a>
                <a href={cvData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Linkedin size={20} className="text-primary-500" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="summary" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 animate-slide-up">
              <div className="bg-gradient-to-r from-gray-850 to-gray-750 text-white p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
                <p className="text-lg leading-relaxed text-gray-100">
                  {cvData.summary}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Deliverables */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center">Key Deliverables</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cvData.keyDeliverables.map((category, index) => (
                <div key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-xl font-bold text-gray-850 mb-4 text-center">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-center py-2 px-4 bg-gray-50 rounded-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center">Key Results</h2>
            <div className="space-y-6">
              {cvData.results.map((result, index) => (
                <div key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-850 mb-3">
                        {result.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title text-center">Professional Experience</h2>
            <div className="space-y-8">
              {cvData.experience.map((exp, index) => (
                <div key={index} className="card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-500 mb-2">
                        {exp.company}
                      </h3>
                      <h4 className="text-xl font-semibold text-gray-850 mb-2">
                        {exp.title}
                      </h4>
                    </div>
                    <div className="lg:text-right">
                      <span className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-850 mb-4">Key Achievements</h5>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="achievement-bullet text-gray-600">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center">Qualifications</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {cvData.qualifications.map((qual, index) => (
                <div key={index} className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold text-gray-850 mb-2">
                    {qual.degree}
                  </h3>
                  <p className="text-primary-500 font-semibold mb-1">
                    {qual.field}
                  </p>
                  <p className="text-gray-600">
                    {qual.institution}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="card p-6 text-center animate-slide-up">
              <h3 className="text-lg font-bold text-gray-850 mb-2">Languages</h3>
              <p className="text-gray-600">
                {cvData.languages.join(', ')}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-850 text-white no-print">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Built with Next.js and Tailwind CSS
            </p>
            <div className="flex justify-center space-x-6">
              <a href={`tel:${cvData.personal.phone}`} className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href={`mailto:${cvData.personal.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href={cvData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}