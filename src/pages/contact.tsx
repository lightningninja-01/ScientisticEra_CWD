import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Headphones, 
  Globe,
  CheckCircle2,
  // Add MessageCircle to your existing lucide-react imports
MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceInterest: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceInterest: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <>
      <SEO 
        title="Contact Us - Get Expert Research Support | ScientisticEra"
        description="Connect with ScientisticEra's expert team. Call +91 7068507857, email contact@scientisticera.com, or visit our office in Bahadurgarh, Haryana. We're here to support your research journey."
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Header />

        {/* Hero Section */}
        {/* <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm mb-6">
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              We're Here to Help
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Let's Start Your Research Success Story
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Whether you have questions about our services, need guidance on your research, or want to explore partnership 
              opportunities—our expert team is ready to assist you every step of the way.
            </p>
          </div>
        </section> */}

        

           <section className="pt-32 pb-16 px-4">
          
            <div className="relative w-full h-[300px] md:h-[300px] mb-5">
           <img src="/contact_Banner.png" alt="" 
           className="w-full h-full object-cover"
           />
           </div>

          
           <div className="container mx-auto max-w-6xl text-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm mb-6">
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              Any Questions?
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
          </div>
        </section>


        {/* Quick Contact Cards */}
        <section className="py-12 px-4 -mt-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <div className="grid md:grid-cols-2 lg:grid-cols- gap-6"></div> */}
              
               <Card className="p-6 text-center hover:shadow-2xl transition-all bg-white border-2 hover:border-green-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Visit Our Office</h3>
                <p className="text-gray-600 text-sm mb-3">Headquarters Location</p>
                <p className="text-green-600 font-semibold text-sm leading-relaxed">
                  Bahadurgarh, Haryana<br />
                  124507, India
                </p>
                <p className="text-gray-500 text-xs mt-2">Appointments preferred</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-2xl transition-all bg-white border-2 hover:border-blue-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Call Us Directly</h3>
                <p className="text-gray-600 text-sm mb-3">Mon-Sat, 9 AM - 6 PM IST</p>
                <a href="tel:+917068507857" className="text-blue-600 font-bold text-lg hover:underline block">
                  +91 7068507857
                </a>
                <p className="text-gray-500 text-xs mt-2">Instant response during business hours</p>
              </Card>

              {/* <Card className="p-6 text-center hover:shadow-2xl transition-all bg-white border-2 hover:border-purple-500">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Whatsapp Now</h3>
                <p className="text-gray-600 text-sm mb-3">Response within 24 hours</p>
                <a href="" className="text-purple-600 font-bold text-sm hover:underline block break-all">
                  contact@scientisticera.com
                </a>
                <p className="text-gray-500 text-xs mt-2">Detailed inquiries welcome</p>
              </Card> */}
              <Card className="p-6 text-center hover:shadow-2xl transition-all bg-white border-2 hover:border-green-500">
  {/* Changed gradient to green for WhatsApp branding */}
  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
    {/* Be sure to import { MessageCircle } from 'lucide-react' at the top of your file */}
    <MessageCircle className="w-8 h-8 text-white" />
  </div>
  
  <h3 className="font-bold text-gray-900 mb-2 text-lg">WhatsApp Now</h3>
  <p className="text-gray-600 text-sm mb-3">Instant response available</p>
  
  {/* Added WhatsApp wa.me link with target="_blank" to open in a new tab/app */}
  <a 
    href="https://wa.me/917068507857" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 font-bold text-sm hover:underline block break-all"
  >
    +91 7068507857
  </a>
  
  <p className="text-gray-500 text-xs mt-2">Tap to chat with our experts</p>
</Card>

              {/* <Card className="p-6 text-center hover:shadow-2xl transition-all bg-white border-2 hover:border-green-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Visit Our Office</h3>
                <p className="text-gray-600 text-sm mb-3">Headquarters Location</p>
                <p className="text-green-600 font-semibold text-sm leading-relaxed">
                  Bahadurgarh, Haryana<br />
                  124507, India
                </p>
                <p className="text-gray-500 text-xs mt-2">Appointments preferred</p>
              </Card> */}

              {/* <Card className="p-6 text-center hover:shadow-2xl transition-all bg-white border-2 hover:border-orange-500">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Working Hours</h3>
                <p className="text-gray-600 text-sm mb-3">Our Office Timings</p>
                <p className="text-orange-600 font-bold">
                  9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600 text-sm mt-1">Monday - Saturday</p>
                <p className="text-gray-500 text-xs mt-2">Closed on Sundays</p>
              </Card> */}
            </div>
          </div>
        </section>

        {/* Main Content - Form and Info */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and our expert team will respond within 24 hours. For urgent matters, 
                    please call us directly at <a href="tel:+917068507857" className="text-blue-600 font-semibold hover:underline">+91 7068507857</a>.
                  </p>
                </div>

                <Card className="p-8 bg-white shadow-2xl border-2">
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900 mb-1">Message Sent Successfully!</p>
                        <p className="text-sm text-green-700">
                          Thank you for contacting us. Our team will respond to your inquiry within 24 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-12 text-base"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Contact"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12 text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-bold text-gray-900 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full h-12 text-base border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service...</option>
                        <option value="research-publication">Research Paper Publication</option>
                        <option value="research-guidance">Research Guidance & Mentorship</option>
                        <option value="thesis-support">Thesis & Dissertation Support</option>
                        <option value="webinars">Webinars & Workshops</option>
                        <option value="ipr-services">IPR Services</option>
                        <option value="awards">Research Awards</option>
                        <option value="mou-partnership">MOU Partnership</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="e.g., Inquiry about paper publication process"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-12 text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Please provide details about your inquiry, research area, or specific questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[180px] text-base"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Be as specific as possible to help us provide accurate information
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How Can We Help?</h2>
                  <div className="space-y-4">
                    <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-blue-500">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">General Inquiries</h3>
                          <p className="text-gray-600 text-sm">
                            Questions about our services, pricing, process, or how to get started? We provide detailed 
                            information tailored to your research needs.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-purple-500">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Headphones className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Technical Support</h3>
                          <p className="text-gray-600 text-sm">
                            Need help with submission processes, document requirements, or account-related issues? 
                            Our technical team provides prompt assistance.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-green-500">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Globe className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Partnership Opportunities</h3>
                          <p className="text-gray-600 text-sm">
                            Interested in institutional partnerships, MOUs, collaborative research, or academic alliances? 
                            Let's discuss mutual growth opportunities.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* FAQ Links */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Resources</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Before reaching out, you might find answers to common questions in our comprehensive resources:
                  </p>
                  <div className="space-y-3">
                    <a href="#" className="block">
                      <Button variant="outline" className="w-full justify-start text-left hover:bg-white">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-blue-600" />
                        Publication Guidelines & Process
                      </Button>
                    </a>
                    <a href="#" className="block">
                      <Button variant="outline" className="w-full justify-start text-left hover:bg-white">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-purple-600" />
                        Webinar Schedule & Registration
                      </Button>
                    </a>
                    <a href="#" className="block">
                      <Button variant="outline" className="w-full justify-start text-left hover:bg-white">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-green-600" />
                        Award Nomination Criteria
                      </Button>
                    </a>
                    <a href="#" className="block">
                      <Button variant="outline" className="w-full justify-start text-left hover:bg-white">
                        <CheckCircle2 className="w-4 h-4 mr-3 text-orange-600" />
                        Service Pricing & Packages
                      </Button>
                    </a>
                  </div>
                </Card>

                {/* Social Media */}
                {/* <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Connect on Social Media</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Stay updated with latest research trends, webinar announcements, and success stories
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-xl flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-xl flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-xl flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </Card> */}
              </div>
            </div>
          </div>
        </section>

        {/* Response Time Guarantee */}
        {/* <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Response Time Guarantee
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur border-2 border-white/20">
                <Clock className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">&lt; 1 Hour</div>
                <p className="text-blue-100">Phone call response during business hours</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur border-2 border-white/20">
                <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">&lt; 24 Hours</div>
                <p className="text-blue-100">Email and form submission replies</p>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur border-2 border-white/20">
                <MessageSquare className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <p className="text-blue-100">Support for existing clients</p>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Map Section */}
        {/* <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600">
                We're located in Bahadurgarh, Haryana. Schedule an appointment for in-person consultations.
              </p>
            </div>
            <Card className="overflow-hidden shadow-2xl border-2">
              <div className="aspect-[21/9] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ScientisticEra Private Limited</h3>
                  <p className="text-lg text-gray-700 mb-1">Bahadurgarh, Haryana</p>
                  <p className="text-lg text-gray-700 mb-6">124507, India</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section> */}


        <Footer />
      </div>
    </>
  );
}