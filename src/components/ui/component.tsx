import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  ChevronRight, 
  Bot, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Star,
  Calendar,
  MessageSquare,
  BarChart3,
  Menu,
  X,
  Brain,
  Sparkles,
  Target
} from 'lucide-react';
import Navigation from '../Navigation';
import SEOHead from '../SEOHead';
import SEOContent, { seoContent, faqContent } from '../SEOContent';
import HeroSection from '../HeroSection';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

// Animated text cycle component
export const AnimatedTextCycle = ({ 
  words, 
  interval = 2000, 
  className = "" 
}: { 
  words: string[]; 
  interval?: number; 
  className?: string; 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {words[currentIndex]}
    </motion.span>
  );
};

// 3D Background component
export const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function XonaiWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: contactForm.name,
            email: contactForm.email,
            company: contactForm.company || '',
            service: contactForm.service || '',
            message: contactForm.message,
          }
        ]);

      if (error) throw error;

      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setContactForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const renderHomePage = () => (
    <>
      <SEOHead />
      <SEOContent page="home" />
      
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete AI Solutions That Actually Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why settle for basic tools when you can have <span className="text-cyan-400 font-semibold">complete automation</span>? 
              Get systems that work together, not against each other.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Websites */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-500/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Smart Business Websites</CardTitle>
                  <CardDescription>
                    Professional websites with integrated AI automation, superior to template solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      AI chatbot integration
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Automated lead capture
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Performance optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      24/7 customer support
                    </li>
                  </ul>
                  <Button 
                    className="w-full group"
                    onClick={() => setCurrentPage('smart-websites')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Agents */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-500/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">AI Agents & Complete Automation</CardTitle>
                  <CardDescription>
                    Comprehensive business automation beyond basic chatbots. 25-40% sales increase for e-commerce.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      E-commerce customer support
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Medical practice automation
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Language center management
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      24/7 intelligent support
                    </li>
                  </ul>
                  <Button 
                    className="w-full group"
                    onClick={() => setCurrentPage('ai-agents')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Custom Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-500/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Custom AI Tools</CardTitle>
                  <CardDescription>
                    Tailored automation solutions that integrate with your existing workflow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Custom integrations
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Workflow automation
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Data analytics
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      ROI tracking
                    </li>
                  </ul>
                  <Button className="w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From consultation to deployment, we ensure your success every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: MessageSquare, 
                title: "Discovery Call", 
                description: "We analyze your business needs and identify automation opportunities." 
              },
              { 
                icon: Brain, 
                title: "Strategy Design", 
                description: "Custom AI solution design tailored to your industry and goals." 
              },
              { 
                icon: Sparkles, 
                title: "Development", 
                description: "Building and training your AI systems with industry-specific knowledge." 
              },
              { 
                icon: Target, 
                title: "Launch & Optimize", 
                description: "Deployment with ongoing monitoring and performance optimization." 
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our AI automation solutions.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqContent.home.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-foreground font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get your free consultation and see how AI automation can boost your efficiency by 40-60%.
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle>Get Your Free Consultation</CardTitle>
              <CardDescription>
                Tell us about your business and we'll show you exactly how our AI solutions can help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={contactForm.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Primary Interest</Label>
                    <Select value={contactForm.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smart-websites">Smart Website Development</SelectItem>
                        <SelectItem value="ai-agents">AI Agents & Complete Automation</SelectItem>
                        <SelectItem value="ecommerce-automation">E-commerce AI Automation</SelectItem>
                        <SelectItem value="custom-tools">Custom AI Tools</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={4}
                    placeholder="Tell us about your business, current challenges, and what you'd like to achieve with AI automation..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Get Free Consultation"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );

  const renderSmartWebsitesPage = () => (
    <>
      <SEOContent page="smart-websites" />
      <div className="pt-20">
        <div className="container mx-auto px-8 max-w-4xl py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Smart Website Development
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Professional websites with integrated AI automation, superior to template solutions.
          </p>
          {/* Add more smart websites content here */}
        </div>
      </div>
    </>
  );

  const renderAIAgentsPage = () => (
    <>
      <SEOContent page="ai-agents" />
      <div className="pt-20">
        <div className="container mx-auto px-8 max-w-4xl py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            AI Agents & Complete Automation
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Comprehensive business automation beyond basic chatbots. 25-40% sales increase for e-commerce.
          </p>
          {/* Add more AI agents content here */}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' && renderHomePage()}
      {currentPage === 'smart-websites' && renderSmartWebsitesPage()}
      {currentPage === 'ai-agents' && renderAIAgentsPage()}
    </div>
  );
}