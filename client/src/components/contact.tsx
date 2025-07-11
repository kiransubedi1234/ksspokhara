import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any questions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-school-blue-800 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Address</h4>
                  <p className="text-slate-600">Pokhara-10, Ram Bazar, Kaski District, Nepal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Phone</h4>
                  <p className="text-slate-600">+977-61-525-XXX</p>
                  <p className="text-slate-600">+977-61-526-XXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Email</h4>
                  <p className="text-slate-600">info@kalikasecondary.edu.np</p>
                  <p className="text-slate-600">admission@kalikasecondary.edu.np</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Office Hours</h4>
                  <p className="text-slate-600">Sunday - Friday: 10:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-school-blue-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-school-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-school-blue-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200 focus:outline-none focus:ring-2 focus:ring-school-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200 focus:outline-none focus:ring-2 focus:ring-school-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200 focus:outline-none focus:ring-2 focus:ring-school-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200 focus:outline-none focus:ring-2 focus:ring-school-blue-500"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-school-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-school-blue-700 transition-colors"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
