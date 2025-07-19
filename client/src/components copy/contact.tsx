import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { toast } = useToast();

  const serviceID = "service_1hcep1y";
  const contactTemplateID = "template_8fy5g4f";
  const Key = "tBKWiHvWiks_yJ7mi";
  const recaptchaSiteKey = "6LfC8IQrAAAAAEl8Stjl6taSSIppb044BUJMY0OE";

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current || !recaptchaToken) {
      toast({
        title: "reCAPTCHA Failed",
        description: "Please complete the reCAPTCHA challenge.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(serviceID, contactTemplateID, form.current, Key, {
        "g-recaptcha-response": recaptchaToken,
      });

      setIsSent(true);
      form.current.reset();
      setRecaptchaToken(null);

      toast({
        title: "Message Sent!",
        description: "Thank you! We’ll get back to you shortly.",
      });

      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-900 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column – Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-school-blue-800 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Address</h4>
                  <p className="text-slate-600">Pokhara-10, Rambazar, Kaski District, Nepal</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Phone className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Phone</h4>
                  <p className="text-slate-600">+977 9856014836</p>
                  <p className="text-slate-600">+977 9846154011</p>
                  <p className="text-slate-600">+977 9846265690</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Email</h4>
                  <p className="text-slate-600">kalikacontactform@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-school-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="text-school-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-school-blue-800 mb-1">Office Hours</h4>
                  <p className="text-slate-600">Sunday - Friday: 10:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Morning Shift: 6:00 AM - 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <div className="bg-school-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-school-blue-800 mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-school-blue-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-school-blue-200"
                />
              </div>

              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                onChange={(token) => setRecaptchaToken(token)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow hover:bg-indigo-500 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {isSent && (
                <p className="text-green-600 font-medium mt-4 text-center">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;