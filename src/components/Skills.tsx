
import { useState, useEffect } from 'react';
import { Code, Brain, Cloud, Zap, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { fetchGitHubRepos, fetchLanguageStats, type LanguageStats } from '@/services/github';

const Skills = () => {
  const [languageStats, setLanguageStats] = useState<LanguageStats>({});
  const [isLoading, setIsLoading] = useState(true);

  const coreSkills = [
    { name: "Python", level: 95, icon: Code, color: "#3776ab" },
    { name: "Machine Learning", level: 90, icon: Brain, color: "#ff6b35" },
    { name: "TensorFlow/PyTorch", level: 88, icon: Brain, color: "#ff9900" },
    { name: "AWS Cloud", level: 85, icon: Cloud, color: "#ff9900" },
    { name: "React/TypeScript", level: 82, icon: Code, color: "#61dafb" },
    { name: "Data Analysis", level: 88, icon: Database, color: "#336791" }
  ];

  const skillCategories = {
    "Programming Languages": ["Python", "Java", "C", "TypeScript", "JavaScript"],
    "ML/AI Tools": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV"],
    "Data & Analytics": ["Pandas", "NumPy", "Matplotlib", "Recharts", "Papa Parse"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Terraform", "Kubernetes"],
    "Frontend Development": ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    "Backend & Database": ["Flask", "Supabase", "PostgreSQL", "MySQL", "OpenAI API"],
    "Development Tools": ["Git", "Docker", "Terraform", "VS Code", "Jupyter"]
  };

  useEffect(() => {
    const loadLanguageStats = async () => {
      try {
        const repos = await fetchGitHubRepos();
        const stats = await fetchLanguageStats(repos);
        setLanguageStats(stats);
      } catch (error) {
        console.error('Failed to fetch language stats:', error);
        // Set fallback data based on your actual skills
        setLanguageStats({
          Python: 15,
          JavaScript: 8,
          TypeScript: 6,
          Java: 4,
          C: 3,
          HTML: 3,
          CSS: 2
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageStats();
  }, []);

  const languageChartData = Object.entries(languageStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 8)
    .map(([language, count], index) => ({
      name: language,
      value: count,
      color: `hsl(${(index * 45) % 360}, 70%, 50%)`
    }));

  const skillsChartData = coreSkills.map(skill => ({
    name: skill.name.split(' ')[0],
    level: skill.level,
    color: skill.color
  }));

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            My technical expertise across machine learning, cloud computing, and software development
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-12">
          {/* Core Skills */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Core Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {coreSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Skills Chart */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Skill Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillsChartData}>
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="level" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-8">
          {/* GitHub Languages */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">GitHub Languages</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={languageChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {languageChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Certifications Preview */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Recent Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "AWS Cloud & ML Foundations",
                  "Generative AI Specialization (Google)",
                  "NLP Course (Great Learning)",
                  "RDBMS Essentials (IBM)"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technology Categories */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <Card key={index} className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
