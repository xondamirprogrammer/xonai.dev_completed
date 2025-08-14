import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SEOContent from './components/SEOContent';
import SEOHead from './components/SEOHead';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { ArrowRight, Bot, Globe, Zap, Clock, TrendingUp, CheckCircle, Star, Users, Target, Lightbulb, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { supabase } from './lib/supabase';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent, formType: string = 'general') => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          service: formData.service || formType
        }]);

      if (error) throw error;

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '', service: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead />
      <SEOContent page={currentPage as any} />
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' && <HomePage onSubmit={handleSubmit} formData={formData} onInputChange={handleInputChange} />}
      {currentPage === 'smart-websites' && <SmartWebsitesPage onSubmit={handleSubmit} formData={formData} onInputChange={handleInputChange} />}
      {currentPage === 'ai-agents' && <AIAgentsPage onSubmit={handleSubmit} formData={formData} onInputChange={handleInputChange} />}
    </div>
  );
}

function HomePage({ onSubmit, formData, onInputChange }: any) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Complete AI Automation That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                Actually Works
              </span>{" "}
              (Beyond Basic Tools)
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Why settle for conversation AI like <span className="text-blue-400 font-semibold">Gliglish</span> or simple booking like <span className="text-purple-400 font-semibold">SimplyBook</span>? Get <span className="text-cyan-400 font-semibold">COMPLETE</span> AI automation!
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              🚀 <strong>40-60% efficiency boost</strong> • <strong>24/7 support</strong> • <strong>300-500% ROI</strong> • Language centers & clinics love us!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">AI Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete automation systems that outperform basic tools and transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-500/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">Smart Business Websites</CardTitle>
                  <CardDescription>Professional websites with integrated AI automation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">24/7 AI Support</Badge>
                    <Badge variant="secondary">Lead Capture</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Superior to template-based solutions with intelligent customer communication and complete business integration.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setCurrentPage('smart-websites')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-500/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">AI Agents & Automation</CardTitle>
                  <CardDescription>Complete business automation beyond basic chatbots</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">60-70% Admin Reduction</Badge>
                    <Badge variant="secondary">Complete Automation</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Unlike basic tools like Gliglish or SimplyBook, handles everything from enrollment to analytics.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setCurrentPage('ai-agents')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-cyan-500/50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">Custom AI Tools</CardTitle>
                  <CardDescription>Specialized solutions for your industry</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">Language Centers</Badge>
                    <Badge variant="secondary">Medical Clinics</Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Complete automation systems designed specifically for language centers and medical practices.
                  </p>
                  <Button variant="outline" className="w-full group">
                    Get Custom Quote
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From consultation to deployment, we ensure your AI solution delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Discovery", desc: "We analyze your business needs and current workflows" },
              { icon: Lightbulb, title: "Strategy", desc: "Design a complete automation solution for your industry" },
              { icon: Shield, title: "Development", desc: "Build and test your custom AI systems" },
              { icon: TrendingUp, title: "Launch", desc: "Deploy with training and ongoing support" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Today</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with complete AI automation? Let's discuss your needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Tell us about your business and automation needs</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => onInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => onInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company/Organization</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => onInputChange('company', e.target.value)}
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interest</label>
                    <Select onValueChange={(value) => onInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smart-websites">Smart Business Websites</SelectItem>
                        <SelectItem value="ai-agents">AI Agents & Automation</SelectItem>
                        <SelectItem value="custom-tools">Custom AI Tools</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => onInputChange('message', e.target.value)}
                      placeholder="Tell us about your business needs and current challenges..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function SmartWebsitesPage({ onSubmit, formData, onInputChange }: any) {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Website Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites with integrated AI automation, superior to template-based solutions.
          </p>
        </div>
      </section>
      
      <section id="smart-websites-contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Smart Website Project</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => onSubmit(e, 'smart-websites')} className="space-y-6">
                  <Input
                    value={formData.name}
                    onChange={(e) => onInputChange('name', e.target.value)}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    placeholder="Your email"
                    required
                  />
                  <Textarea
                    value={formData.message}
                    onChange={(e) => onInputChange('message', e.target.value)}
                    placeholder="Tell us about your website needs..."
                    required
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function AIAgentsPage({ onSubmit, formData, onInputChange }: any) {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Agents & Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete business automation that goes beyond basic chatbots like Gliglish or simple booking like SimplyBook.
          </p>
        </div>
      </section>
      
      <section id="ai-agents-contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Start Your AI Automation Project</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => onSubmit(e, 'ai-agents')} className="space-y-6">
                  <Input
                    value={formData.name}
                    onChange={(e) => onInputChange('name', e.target.value)}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => onInputChange('email', e.target.value)}
                    placeholder="Your email"
                    required
                  />
                  <Textarea
                    value={formData.message}
                    onChange={(e) => onInputChange('message', e.target.value)}
                    placeholder="Tell us about your automation needs..."
                    required
                  />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;