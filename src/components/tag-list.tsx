export function TagList({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li key={tag} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs">
          {tag}
        </li>
      ))}
    </ul>
  );
}
