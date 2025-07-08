
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "HealthAI",
      description: "ML-powered health diagnostic system using computer vision and NLP to analyze medical images and patient data. Achieved 94% accuracy in preliminary diagnosis.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Poacher Detection",
      description: "Real-time wildlife protection system using YOLOv8 and thermal imaging to detect illegal activities in protected areas. Deployed on edge devices for remote monitoring.",
      techStack: ["PyTorch", "YOLOv8", "OpenCV", "Raspberry Pi", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Smart Trading Bot",
      description: "Algorithmic trading system with reinforcement learning for cryptocurrency markets. Implemented risk management and backtesting frameworks.",
      techStack: ["Python", "Pandas", "Scikit-learn", "AWS Lambda", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work in machine learning and AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
