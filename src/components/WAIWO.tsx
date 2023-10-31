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
    <section className="border border-[#1E1B22] rounded-3xl p-8 gap-y-3 flex flex-col">
      <h1 className="font-medium text-2xl">What I&apos;m working on</h1>

      {repo?.image ? (
        <a
          href={`https://github.com/${repo.repo}`}
          target="_blank"
          rel="noreferrer"
        >
          <img className="flex-1 self-stretch rounded-xl" src={repo.image} />
        </a>
      ) : (
        <div className="block w-full h-40 rounded-xl bg-gray-200 animate-pulse"></div>
      )}
    </section>
  );
}
