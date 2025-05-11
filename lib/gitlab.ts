/**
 * Fetches a snippet of code around a specific line from a GitLab repository file.
 *
 * @param projectId - Numeric project ID or URL-encoded namespace/project path.
 * @param token - GitLab Personal Access Token with read_repository or api scope.
 * @param filePath - Path to the file within the repository.
 * @param line - 1-based line number to center the snippet around.
 * @param context - Number of lines of context before and after the line.
 * @param ref - Branch, tag, or commit SHA.
 * @returns Snippet of code as a string.
 */
export async function fetchSnippet(
  projectId: number | string,
  token: string,
  filePath: string,
  line: number,
  context: number = 2,
  ref: string = "main"
): Promise<string> {
  // Hardcoded local root to strip off absolute paths in backtraces, should be made dynamic
  const LOCAL_ROOT = "/Users/tomdevisser/Local Sites/cerberus/app/public";

  const relativePath = filePath.replace(`${LOCAL_ROOT}/`, "");
  const encodedPath = encodeURIComponent(relativePath);

  const projectParam =
    typeof projectId === "string" ? encodeURIComponent(projectId) : projectId;

  const apiUrl =
    `https://gitlab.com/api/v4/projects/${projectParam}` +
    `/repository/files/${encodedPath}/raw?ref=${encodeURIComponent(ref)}`;
  console.log(apiUrl);
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitLab API error ${response.status}: ${errorText}`);
  }
  const fileContent = await response.text();
  const lines = fileContent.split("\n");
  const start = Math.max(0, line - context - 1);
  const end = Math.min(lines.length, line + context);
  return lines.slice(start, end).join("\n");
}
