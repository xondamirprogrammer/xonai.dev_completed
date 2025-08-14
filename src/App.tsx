import React from 'react';

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold text-white">xonai.dev</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:text-white transition-colors">Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Complete AI Automation That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Actually Works
            </span>
            {" "}(Beyond Basic Tools)
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Why settle for basic <span className="text-orange-400 font-semibold">e-commerce chatbots</span>, conversation AI like <span className="text-blue-400 font-semibold">Gliglish</span>, or simple booking like <span className="text-purple-400 font-semibold">SimplyBook</span>? Get <span className="text-cyan-400 font-semibold">COMPLETE</span> AI automation!
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            🚀 <strong className="text-green-400">40-60% efficiency boost</strong> • <strong className="text-blue-400">25-40% sales increase</strong> • <strong className="text-purple-400">24/7 customer support</strong> • <strong className="text-yellow-400">300-500% ROI</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              🚀 Get Started Now
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg text-lg transition-all duration-300"
            >
              View Services →
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            🔥 Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Complete</span> Services
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Beyond basic tools - Get comprehensive AI automation that transforms your entire business
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Websites */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Smart Websites with AI</h3>
              <p className="text-gray-400 mb-6">
                Professional websites with integrated AI automation. Superior to template-based solutions. 24/7 AI support, intelligent lead capture.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ AI Chatbot Integration</li>
                <li>✅ Automated Lead Capture</li>
                <li>✅ Performance Optimization</li>
                <li>✅ Mobile-First Design</li>
              </ul>
            </div>

            {/* AI Agents */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">E-commerce AI Automation</h3>
              <p className="text-gray-400 mb-6">
                Complete e-commerce automation beyond basic chatbots. 25-40% sales increase, order tracking, product recommendations.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ 24/7 Customer Support</li>
                <li>✅ Sales Optimization</li>
                <li>✅ Order Tracking</li>
                <li>✅ Product Recommendations</li>
              </ul>
            </div>

            {/* Medical/Language Automation */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Clinic & Language Center AI</h3>
              <p className="text-gray-400 mb-6">
                Beyond basic booking like SimplyBook. Complete practice automation, patient communication, scheduling.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✅ Intelligent Scheduling</li>
                <li>✅ Patient Communication</li>
                <li>✅ Enrollment Automation</li>
                <li>✅ 60-70% Admin Reduction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Complete</span> Automation?
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">🆚 vs Basic E-commerce Chatbots</h3>
                <p className="text-gray-300">
                  Basic chatbots only answer FAQs. Our complete automation handles customer support, order tracking, product recommendations, and sales optimization with 25-40% sales increase.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">🆚 vs Gliglish/Conversation AI</h3>
                <p className="text-gray-300">
                  Gliglish only handles conversations. We provide complete language center automation: enrollment, scheduling, parent communication, progress tracking with 60-70% admin reduction.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">🆚 vs SimplyBook/TIMIFY</h3>
                <p className="text-gray-300">
                  Basic booking tools only manage appointments. Our complete medical automation includes patient communication, follow-ups, analytics with 30-50% efficiency improvement.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">💰 300-500% ROI Guaranteed</h3>
                <p className="text-gray-300">
                  Complete automation pays for itself within 3-6 months through increased efficiency, 24/7 operations, and reduced operational costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Complete</span> Automation?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Stop settling for basic tools. Get complete AI automation that actually works!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-green-400">📱 WhatsApp</h3>
              <p className="text-gray-300">+998901326467</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-blue-400">📧 Email</h3>
              <p className="text-gray-300">xmirsaidov5@gmail.com</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-purple-400">💬 Telegram</h3>
              <p className="text-gray-300">@M_X_Mirsaidov</p>
            </div>
          </div>

          <button 
            onClick={() => window.open('https://wa.me/998901326467', '_blank')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            🚀 Start Your Project Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold text-white">xonai.dev</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Complete AI Automation - Beyond Basic Tools
          </p>
          
          <p className="text-sm text-gray-500">
            © 2025 xonai.dev - Transforming businesses with complete AI automation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;