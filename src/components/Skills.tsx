
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
    { name: "Cloud Platforms (AWS)", level: 85, icon: Cloud, color: "#ff9900" },
    { name: "Deep Learning", level: 88, icon: Brain, color: "#4285f4" },
    { name: "MLOps & Deployment", level: 82, icon: Zap, color: "#00d4aa" },
    { name: "Database Systems", level: 80, icon: Database, color: "#336791" }
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "AWS", "Docker", "Kubernetes", "Git", "Linux",
    "FastAPI", "Flask", "PostgreSQL", "MongoDB", "Redis",
    "React", "TypeScript", "Node.js", "GraphQL", "REST APIs"
  ];

  useEffect(() => {
    const loadLanguageStats = async () => {
      try {
        const repos = await fetchGitHubRepos();
        const stats = await fetchLanguageStats(repos);
        setLanguageStats(stats);
      } catch (error) {
        console.error('Failed to fetch language stats:', error);
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
            My technical expertise and proficiency across various domains
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
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

          {/* Technologies */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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

export default Skills;
