export function withBase(path: string): string {
    if (!path) return path;
    return import.meta.env.BASE_URL + path.replace(/^\//, '');
}