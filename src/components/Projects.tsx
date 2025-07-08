
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fetchGitHubRepos, type GitHubRepo } from '@/services/github';

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProjects] = useState([
    'HealthAI',
    'Poacher-Detection',
    'Smart-Trading-Bot',
    'ML-Pipeline',
    'Computer-Vision-Project'
  ]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const repoData = await fetchGitHubRepos();
        // Filter for featured projects or most starred
        const featured = repoData
          .filter(repo => featuredProjects.some(name => 
            repo.name.toLowerCase().includes(name.toLowerCase())
          ))
          .slice(0, 6);
        
        // If no featured projects found, use most starred repos
        if (featured.length === 0) {
          setRepos(repoData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6)
          );
        } else {
          setRepos(featured);
        }
      } catch (error) {
        console.error('Failed to fetch repositories:', error);
        // Fallback to static projects
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
            A showcase of my recent work in machine learning and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {repos.map((repo) => (
            <Card key={repo.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-foreground line-clamp-1">{repo.name}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Star className="h-4 w-4" />
                    {repo.stargazers_count}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                  {repo.description || "No description available"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    {repo.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Updated {formatDate(repo.updated_at)}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    {repo.homepage && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={() => window.open(repo.homepage, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
