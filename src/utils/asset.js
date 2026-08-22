export function asset(path) {
  if (!path) return path;
  const base = import.meta.env.BASE_URL; // "/" in dev, "/your-repo-name/" in prod
  return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
}