
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fetchGitHubRepos, type GitHubRepo } from '@/services/github';

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Your actual projects data
  const featuredProjects = [
    {
      name: 'Poacher-Detection',
      description: 'AI system to detect poachers in wildlife reserves using computer vision. Boosted detection accuracy by 28% through advanced deep learning techniques.',
      technologies: ['OpenCV', 'TensorFlow', 'Keras', 'Python', 'Computer Vision'],
      github: 'https://github.com/Aditya1416/Poacher-Detection',
      highlights: ['28% accuracy improvement', 'Real-time detection', 'Wildlife conservation']
    },
    {
      name: 'Patient Health Management System',
      description: 'AI-powered platform for predictive healthcare analytics with comprehensive patient management features. Increased patient engagement by 25%.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Flask', 'PostgreSQL'],
      github: 'https://github.com/Aditya1416',
      highlights: ['25% engagement increase', 'Predictive analytics', 'Healthcare AI']
    },
    {
      name: 'NyayaBot',
      description: 'Legal NLP assistant for Indian laws including IPC, CrPC, CPC. Provides intelligent legal guidance and document analysis.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'NLP'],
      github: 'https://github.com/Aditya1416',
      highlights: ['Legal AI assistant', 'Indian law expertise', 'Document analysis']
    },
    {
      name: 'ExpenseTrackerAI',
      description: 'AI-driven expense tracker with smart analytics and insights. Features intelligent categorization and financial planning.',
      technologies: ['React 18', 'Recharts', 'Papa Parse', 'Tailwind CSS', 'AI Analytics'],
      github: 'https://github.com/Aditya1416',
      highlights: ['Smart categorization', 'Financial insights', 'AI-powered analytics']
    }
  ];

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const repoData = await fetchGitHubRepos();
        // Try to match with featured projects or use top repos
        const featured = repoData.filter(repo => 
          featuredProjects.some(project => 
            repo.name.toLowerCase().includes(project.name.toLowerCase())
          )
        );
        
        if (featured.length > 0) {
          setRepos(featured);
        } else {
          // Use top starred repos as fallback
          setRepos(repoData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 4)
          );
        }
      } catch (error) {
        console.error('Failed to fetch repositories:', error);
        // Use static project data as fallback
        setRepos([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const displayProjects = repos.length > 0 ? repos : featuredProjects.map((project, index) => ({
    id: index,
    name: project.name,
    description: project.description,
    html_url: project.github,
    stargazers_count: 0,
    language: project.technologies[0],
    topics: project.technologies.slice(1, 4),
    updated_at: new Date().toISOString(),
    homepage: null
  }));

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my machine learning and software development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayProjects.map((project, index) => {
            const featuredProject = featuredProjects.find(fp => 
              project.name.toLowerCase().includes(fp.name.toLowerCase())
            );
            
            return (
              <Card key={project.id || index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-foreground line-clamp-1">{project.name}</CardTitle>
                    {project.stargazers_count !== undefined && (
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Star className="h-4 w-4" />
                        {project.stargazers_count}
                      </div>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description || "No description available"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.language && (
                        <Badge variant="secondary" className="text-xs">
                          {project.language}
                        </Badge>
                      )}
                      {project.topics?.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    
                    {featuredProject && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground text-sm">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {featuredProject.highlights.map((highlight, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {project.updated_at && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        Updated {formatDate(project.updated_at)}
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.html_url, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                      {project.homepage && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-2"
                          onClick={() => window.open(project.homepage, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/Aditya1416', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
