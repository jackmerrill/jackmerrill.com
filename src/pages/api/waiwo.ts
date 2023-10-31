import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const res = await fetch(
    "https://api.github.com/users/jackmerrill/events/public"
  );

  const data = await res.json();

  const commits = data.filter((e) => e.type === "PushEvent");

  const repo = commits[0].repo.name;

  // get the repo

  const repoRes = await fetch(`https://github.com/${repo}`, {
    headers: {
      Accept: "text/html",
    },
    mode: "cors",
  });

  const html = await repoRes.text();

  // get the "twitter:image:src" meta tag

  const image = html.match(
    /(?<=<meta property="og:image" content=")(.*?)(?=")/g
  );

  if (!image) {
    return new Response(JSON.stringify({ image: null, repo }), { status: 404 });
  }

  return new Response(JSON.stringify({ image: image[0], repo }));
};
