import type {GHRepository} from "./types.ts";

/**
 * Configuration
 */
const GITHUB_API_BASE = "https://api.github.com";
const DEFAULT_HEADERS: HeadersInit = {
  "Accept": "application/vnd.github.v3+json",
  "User-Agent": "gabrieleforner.github.io",
};

/**
 * Interface for raw GitHub repository data from API
 */
interface RawRepository {
  id: number;
  name: string;
  html_url: string;
  description?: string | null;
  fork: boolean;
  forks_url?: string | null;
}

/**
 * Fetches GitHub repositories for a user and returns them in a UI-consumable format.
 * Based on GitHub REST API v3: GET /users/{username}/repos
 *
 * @param username - The GitHub username to fetch repositories for.
 * @returns A promise resolving to an array of simplified repository objects.
 * @throws An error if the request fails.
 */
export async function fetchGHRepositories(username: string): Promise<GHRepository[]> {
  const url = `${GITHUB_API_BASE}/users/${username}/repos`;

  const response = await fetch(url, {
    method: "GET",
    headers: DEFAULT_HEADERS
  });

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Failed to fetch repos for ${username}: ${response.status} ${errBody}`);
  }

  const rawRepos: RawRepository[] = await response.json();

  return rawRepos.map(({ id, name, html_url, description, fork, forks_url }) => ({
    id,
    name,
    html_url,
    description: description ?? null,
    fork,
    forks_url: forks_url ?? null,
  }));
}