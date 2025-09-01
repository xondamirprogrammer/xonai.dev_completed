import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './button';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';
import { 
  ArrowRight, 
  ChevronRight, 
  Bot, 
  Zap, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  ShoppingCart,
  Heart,
  GraduationCap,
  Stethoscope,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowUp
} from 'lucide-react';
import SEOContent from '../SEOContent';
import Navigation from '../Navigation';

// Animated text cycle component
export function AnimatedTextCycle({ 
  words, 
  interval = 3000, 
  className = "" 
}: { 
  words: string[]; 
  interval?: number; 
  className?: string; 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
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
}

// 3D Background component
export function ThreeDBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/95" />
    </div>
  );
}

// Main website component
export default function XonaiWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleGetStarted = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOContent page="home" />
      <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <ThreeDBackground />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Complete AI Automation That{" "}
              <AnimatedTextCycle
                words={["Actually Works", "Beats Basic Tools", "Boosts Sales 40%", "Works 24/7"]}
                interval={3000}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
              />{" "}
              (Beyond Basic Tools)
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Why settle for basic <span className="text-orange-400 font-semibold">e-commerce chatbots</span>, conversation AI like <span className="text-blue-400 font-semibold">Gliglish</span>, or simple booking like <span className="text-purple-400 font-semibold">SimplyBook</span>? Get <span className="text-cyan-400 font-semibold">COMPLETE</span> AI automation!
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              🚀 <strong>40-60% efficiency boost</strong> • <strong>25-40% sales increase</strong> • <strong>24/7 customer support</strong> • <strong>300-500% ROI</strong> • E-commerce, clinics & language centers love us!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                className="group relative overflow-hidden" 
                size="lg"
                onClick={handleGetStarted}
              >
                <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                  Get Started
                </span>
                <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
                  <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
                </i>
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why E-commerce, Clinics & Language Centers Choose Complete AI Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stop piecing together basic tools! Get one intelligent system that handles everything
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* E-commerce AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                      <ShoppingCart className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">E-commerce</Badge>
                  </div>
                  <CardTitle className="text-xl">24/7 E-commerce AI (Beyond Basic Chatbots)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete e-commerce automation: intelligent customer support, order tracking, product recommendations, sales optimization. Unlike basic e-commerce chatbots, increases sales 25-40%!
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 Customer Support</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Order Tracking Automation</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Product Recommendations</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Sales Conversion Optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Medical Practice AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <Stethoscope className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Healthcare</Badge>
                  </div>
                  <CardTitle className="text-xl">Medical Practice AI (Beyond SimplyBook)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete medical automation beyond basic booking like SimplyBook or TIMIFY. AI patient communication, intelligent scheduling, automated follow-ups. 30-50% efficiency improvement!
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Intelligent Appointment Booking</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Patient Communication</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automated Reminders</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Follow-up Management</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Language Center AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">Education</Badge>
                  </div>
                  <CardTitle className="text-xl">Language Center AI (Beyond Gliglish)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete language center automation beyond conversation AI like Gliglish or Mizou. Enrollment automation, intelligent scheduling, multilingual support. 60-70% admin reduction!
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automated Enrollment</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Class Scheduling</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Parent Communication</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Progress Tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Complete AI Automation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From analysis to deployment, we ensure your AI automation delivers maximum ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "1. Business Analysis",
                description: "Deep dive into your current processes, pain points, and automation opportunities"
              },
              {
                icon: <Bot className="h-8 w-8" />,
                title: "2. AI System Design",
                description: "Custom AI solution architecture tailored to your specific industry and needs"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "3. Development & Integration",
                description: "Build and integrate AI automation with your existing business systems"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "4. Launch & Optimize",
                description: "Deploy, monitor, and continuously optimize for maximum performance and ROI"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about complete AI automation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  Why choose complete AI automation over basic e-commerce chatbots or tools like SimplyBook?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  While basic e-commerce chatbots only handle simple FAQs and tools like SimplyBook only manage appointments, complete AI automation transforms your entire business operation. For e-commerce: intelligent customer support, automated order tracking, product recommendations, sales optimization. For clinics/language centers: smart scheduling, patient/student communication, enrollment automation. Result: 40-60% efficiency boost, 25-40% sales increase for e-commerce, 300-500% ROI across all industries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  How does AI automation help e-commerce stores increase sales?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  AI automation helps e-commerce stores increase sales through intelligent customer support, automated product recommendations, order tracking, and sales optimization. Our complete automation systems typically result in 25-40% sales increases, 60% reduction in support workload, and 24/7 intelligent customer service that converts browsers into buyers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  What makes your AI solutions better than basic chatbots like Gliglish or Mizou?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Unlike conversation-only AI like Gliglish or basic school chatbots like Mizou, our complete automation handles your entire business workflow. We integrate with your existing systems, automate administrative tasks, provide intelligent analytics, and create seamless customer experiences. While others offer single-purpose tools, we provide comprehensive business transformation with measurable ROI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  Can you help medical clinics with more than just basic appointment booking?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! While basic booking software like SimplyBook or TIMIFY only handles appointments, our complete medical automation includes AI patient communication, intelligent scheduling optimization, automated follow-ups, prescription reminders, insurance verification, and comprehensive practice analytics. This results in 30-50% efficiency improvement and significantly better patient satisfaction.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left">
                  How long does it take to implement complete AI automation?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Implementation timeline depends on complexity: Simple AI automation (customer service, basic scheduling) takes 1-2 weeks. Advanced systems (e-commerce integration, medical practice automation, language center management) take 2-4 weeks. Complex multi-system automation takes 4-8 weeks. We provide detailed timelines and start delivering value within the first week of implementation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready for Complete AI Automation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join 100+ businesses that chose complete automation over basic tools
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Get Your Free AI Automation Assessment</h3>
                  <p className="text-muted-foreground">
                    Discover how complete AI automation can transform your business
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                    <h4 className="font-semibold">E-commerce</h4>
                    <p className="text-sm text-muted-foreground">25-40% sales boost</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <Stethoscope className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                    <h4 className="font-semibold">Medical Clinics</h4>
                    <p className="text-sm text-muted-foreground">30-50% efficiency gain</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <GraduationCap className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                    <h4 className="font-semibold">Language Centers</h4>
                    <p className="text-sm text-muted-foreground">60-70% admin reduction</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">📞 Call/WhatsApp: +998 90 132 64 67</p>
                    <p className="font-semibold">📧 Email: xmirsaidov5@gmail.com</p>
                    <p className="font-semibold">💬 Telegram: @M_X_Mirsaidov</p>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    >
                      Start Your AI Automation Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

// Scroll to top component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </>
  );
}