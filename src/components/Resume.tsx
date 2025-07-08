
import { Download, Code, Brain, Cloud, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Resume = () => {
  const skills = [
    { name: "Python", level: 95, icon: Code },
    { name: "Machine Learning", level: 90, icon: Brain },
    { name: "Cloud Platforms (AWS)", level: 85, icon: Cloud },
    { name: "Deep Learning", level: 88, icon: Brain },
    { name: "MLOps & Deployment", level: 82, icon: Zap }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "AWS", "Docker", "Kubernetes", "Git", "Linux",
    "FastAPI", "Flask", "PostgreSQL", "MongoDB", "Redis"
  ];

  return (
    <section id="resume" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Resume</h2>
          <p className="text-lg text-slate-600 mb-8">
            Download my complete resume or explore my key skills below
          </p>
          <Button size="lg" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Core Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-slate-600" />
                        <span className="font-medium text-slate-800">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-600">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm hover:bg-slate-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
