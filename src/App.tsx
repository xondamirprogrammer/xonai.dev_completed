import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SEOContent from './components/SEOContent';
import { ArrowRight, Zap, Users, Clock, TrendingUp } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOContent page="home" />
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our AI Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete automation that goes beyond basic chatbots and simple booking systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle className="text-2xl">Smart Websites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional websites with integrated AI automation. Superior to template-based solutions.
                </p>
                <Button 
                  className="w-full group"
                  onClick={() => setCurrentPage('smart-websites')}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle className="text-2xl">AI Agents & Chatbots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete business automation beyond basic chatbots. 25-40% sales increase for e-commerce.
                </p>
                <Button 
                  className="w-full group"
                  onClick={() => setCurrentPage('ai-agents')}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle className="text-2xl">Complete Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full business automation for clinics & language centers. 60-70% admin reduction.
                </p>
                <Button className="w-full group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Complete Automation?</h2>
            <p className="text-xl text-muted-foreground">
              Stop settling for basic tools. Get the complete solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">❌ Basic Tools Problems</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>Gliglish:</strong> Only handles conversations</li>
                <li>• <strong>SimplyBook:</strong> Just appointment booking</li>
                <li>• <strong>Basic e-commerce chatbots:</strong> Only FAQs</li>
                <li>• <strong>Generic school tools:</strong> Limited features</li>
                <li>• Multiple tools = Multiple problems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">✅ Our Complete Solution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• <strong>24/7 customer support</strong> automation</li>
                <li>• <strong>25-40% sales increase</strong> for e-commerce</li>
                <li>• <strong>60-70% admin reduction</strong> for centers</li>
                <li>• <strong>Complete workflow</strong> automation</li>
                <li>• One system handles everything</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Beat Basic Tools?</h2>
            <p className="text-xl text-muted-foreground">
              Get complete AI automation that actually works. Stop settling for basic solutions.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Get Your Free Consultation</h3>
                  <p className="text-muted-foreground">
                    See how complete automation can transform your business
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Business Type</label>
                    <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                      <option>E-commerce Store</option>
                      <option>Medical Clinic</option>
                      <option>Language Center</option>
                      <option>Other Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-border rounded-md bg-background text-foreground"
                      placeholder="Tell us about your business and what you need..."
                    ></textarea>
                  </div>

                  <Button className="w-full text-lg py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Get Free Consultation 🚀
                  </Button>
                </div>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                  <p>📞 <strong>Call/WhatsApp:</strong> +998901326467</p>
                  <p>📧 <strong>Email:</strong> xmirsaidov5@gmail.com</p>
                  <p>💬 <strong>Telegram:</strong> @M_X_Mirsaidov</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;