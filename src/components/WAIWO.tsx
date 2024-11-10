import { useState, useEffect } from "react";

export default function WAIWO() {
  const [repo, setRepo] = useState<{
    image: string | null;
    repo: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/waiwo")
      .then((res) => res.json())
      .then((data) => setRepo(data));
  }, []);
  return (
    <section className="border border-white/10 rounded-md p-8 gap-y-3 flex flex-col">
      <h1 className="font-medium text-2xl">What I&apos;m working on</h1>

      {repo?.image ? (
        <a
          href={`https://github.com/${repo.repo}`}
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
        >
          <img
            className="flex-1 self-stretch rounded-md"
            src={repo.image}
            alt={repo.repo}
          />
        </a>
      ) : (
        <div className="block w-full h-40 rounded-md bg-gray-200 animate-pulse"></div>
      )}
    </section>
  );
}
