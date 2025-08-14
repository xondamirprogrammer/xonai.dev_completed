import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Target, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold text-foreground">xonai.dev</span>
          </div>
          <Button className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Complete AI Automation That Actually Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            🚀 Why settle for basic e-commerce chatbots, conversation AI like Gliglish, or simple booking like SimplyBook? 
            Get COMPLETE AI automation: <strong>40-60% efficiency boost</strong> • <strong>25-40% sales increase</strong> • <strong>24/7 customer support</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete AI Solutions Beyond Basic Tools
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-blue-500/50 transition-colors">
              <Bot className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">E-commerce AI Automation</h3>
              <p className="text-muted-foreground mb-4">
                Complete customer support, order tracking, product recommendations. 
                <strong className="text-orange-400">25-40% sales increase</strong>, 24/7 intelligent support.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 24/7 Customer Support</li>
                <li>• Automated Order Tracking</li>
                <li>• Product Recommendations</li>
                <li>• Sales Optimization</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-purple-500/50 transition-colors">
              <Target className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Language Center Revolution</h3>
              <p className="text-muted-foreground mb-4">
                Beyond basic chatbots like Gliglish or Mizou. Complete enrollment automation, 
                <strong className="text-blue-400">60-70% admin reduction</strong>.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automated Student Enrollment</li>
                <li>• Intelligent Class Scheduling</li>
                <li>• Parent Communication</li>
                <li>• Progress Tracking</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-green-500/50 transition-colors">
              <Zap className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Medical Practice Intelligence</h3>
              <p className="text-muted-foreground mb-4">
                Beyond basic booking like SimplyBook or TIMIFY. Complete patient communication, 
                <strong className="text-purple-400">30-50% efficiency improvement</strong>.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• AI Patient Communication</li>
                <li>• Intelligent Scheduling</li>
                <li>• Automated Follow-ups</li>
                <li>• Practice Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 100+ businesses that chose complete AI automation over basic tools
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            <Clock className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 xonai.dev - Complete AI Automation Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;