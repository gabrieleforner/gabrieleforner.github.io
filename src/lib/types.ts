export interface SocialButton {
    socialUrl: string,
    buttonImage: string,
}

export interface GHStatGalleryEntry {
    id: number,
    title: string,
    imageUrl: string,
}

/**
 * GitHub API Repository schema - minimal fields for listing user repos
 * Based on GitHub REST API v3: GET /users/{username}/repos
 * @see https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
 */
export interface GHRepository {
    id: number;
    name: string,
    html_url: string;
    description: string | null;
    fork: boolean;
    forks_url: string | null;
}

export interface GHRepositoryOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | null;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: GHOwnerType;
    site_admin: boolean;
}

export type GHOwnerType = 'User' | 'Organization';

export type GHRepositoryVisibility = 'public' | 'private' | 'internal';

export interface GHLicense {
    key: string;
    name: string;
    spdx_id: string | null;
    url: string | null;
    node_id: string;
}

export interface GHRepositoryPermissions {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
}

/**
 * Parameters for listing repositories for a user/org
 * @see https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
 */
export interface GHListReposParams {
    type?: 'all' | 'owner' | 'member';
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    page?: number;
}

/**
 * Response type for listing repositories (array of repositories)
 */
export type GHListReposResponse = GHRepository[];

/**
 * Simplified repository view for UI display
 */
export interface GHRepositorySummary {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    topics: string[];
    visibility: GHRepositoryVisibility;
    fork: boolean;
    archived: boolean;
    disabled: boolean;
    created_at: string;
    updated_at: string;
    pushed_at: string | null;
    default_branch: string;
    license: GHLicense | null;
    owner: GHRepositoryOwner;
}