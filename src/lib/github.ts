export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export async function fetchPublicRepos(username: string, limit = 6): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12&type=public`,
      {
        headers: { Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const data: GitHubRepo[] = await res.json();
    return data.filter((r) => !r.fork).slice(0, limit);
  } catch {
    return [];
  }
}
