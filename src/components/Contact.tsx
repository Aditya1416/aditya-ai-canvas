
import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect over our shared passion for AI and machine learning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                  <Mail className="h-6 w-6 text-slate-600" />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">aditya.sharma@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                  <Linkedin className="h-6 w-6 text-slate-600" />
                  <div>
                    <p className="font-medium text-slate-800">LinkedIn</p>
                    <p className="text-slate-600">linkedin.com/in/adityasharma</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
                  <Github className="h-6 w-6 text-slate-600" />
                  <div>
                    <p className="font-medium text-slate-800">GitHub</p>
                    <p className="text-slate-600">github.com/adityasharma</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Let's Build Something Amazing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or potential collaborations. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
