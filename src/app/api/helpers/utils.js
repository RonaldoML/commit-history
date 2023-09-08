export const getUri = (user, repo) =>
  new URL(`https://api.github.com/repos/${user}/${repo}/commits`);

export const getHeader = (token) => ({
  headers: {
    accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
