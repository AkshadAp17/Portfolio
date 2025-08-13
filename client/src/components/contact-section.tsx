import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter, Send } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import type { InsertContactSubmission } from "@shared/schema";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    submitContactMutation.mutate(formData as InsertContactSubmission);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "akshadapastambh37@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8459791239",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Usually within 24 hours",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Let's work together</h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you're a startup
                looking to build your first product or an established company wanting to modernize your tech stack,
                I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-4 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="bg-[var(--portfolio-primary)] text-white p-3 rounded-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon size={20} />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium text-slate-900 dark:text-white">{info.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerItem} className="flex space-x-4">
              <a
                href= "https://www.linkedin.com/in/akshad-apastambh-9726332a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                    <SelectItem value="20k-plus">$20,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--portfolio-primary)] hover:bg-blue-700 text-white"
                disabled={submitContactMutation.isPending}
              >
                {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
