
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchGitHubUser, type GitHubUser } from '@/services/github';

const Hero = () => {
  const [gitHubUser, setGitHubUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        const userData = await fetchGitHubUser();
        setGitHubUser(userData);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGitHubData();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="/lovable-uploads/6f75cbc9-1458-4b81-99f5-8e5323e79a4c.png"
              alt="Aditya Sharma"
              className="w-32 h-32 rounded-full mx-auto shadow-lg border-4 border-primary/20 object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Aditya Sharma
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
            Machine Learning Developer
          </h2>
          
          {gitHubUser && (
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                SRM IST, Kattankulathur
              </div>
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                B.Tech CSE (AI & ML)
              </div>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                {gitHubUser.public_repos} repositories
              </div>
            </div>
          )}
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Machine Learning Developer with hands-on experience in end-to-end ML pipelines—data preprocessing, model building, deployment, and performance tuning. Proficient in Python, TensorFlow, PyTorch, Scikit-learn, and cloud platforms (AWS, GCP). Adept at developing scalable AI solutions for predictive analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('https://github.com/Aditya1416', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => window.open('https://www.linkedin.com/in/aditya-sharma-997034255', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover:scale-110 transition-transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
