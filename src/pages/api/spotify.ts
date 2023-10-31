import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const API_KEY = import.meta.env.LASTFM_API_KEY;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=amusedgrape&api_key=${API_KEY}&format=json`
  );

  const data = await res.json();

  const track = data.recenttracks.track[0];

  return new Response(
    JSON.stringify({
      artist: track.artist["#text"],
      album: {
        name: track.album["#text"],
        image: track.image[3]["#text"],
      },
      song: track.name,
      nowPlaying: track["@attr"]?.nowplaying || false,
      url: track.url,
    })
  );
};
