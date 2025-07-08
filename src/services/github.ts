
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  homepage: string | null;
}

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
}

export interface LanguageStats {
  [key: string]: number;
}

const GITHUB_USERNAME = 'Aditya1416';

export const fetchGitHubUser = async (): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user');
  }
  return response.json();
};

export const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repos');
  }
  return response.json();
};

export const fetchLanguageStats = async (repos: GitHubRepo[]): Promise<LanguageStats> => {
  const languageStats: LanguageStats = {};
  
  for (const repo of repos.slice(0, 20)) { // Limit to avoid rate limiting
    if (repo.language) {
      languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
    }
  }
  
  return languageStats;
};
