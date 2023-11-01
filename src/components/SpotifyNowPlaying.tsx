import { useEffect, useState } from "react";
import { SiSpotify } from "@icons-pack/react-simple-icons";
import styles from "./nowplaying.module.scss";

type NPRes = {
  artist: string;
  song: string;
  album: {
    name: string;
    image: string;
  };
  nowPlaying: boolean;
  url: string;
};
export default function SpotifyNowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<NPRes | null>(null);

  useEffect(() => {
    fetch("/api/spotify")
      .then((res) => res.json())
      .then((data) => setNowPlaying(data));
  }, []);

  useEffect(() => {
    const int = setInterval(() => {
      fetch("/api/spotify")
        .then((res) => res.json())
        .then((data) => setNowPlaying(data));
    }, 10000);
    return () => clearInterval(int);
  }, []);

  return (
    <div className="flex p-4 items-end gap-3 self-stretch border border-[#1DB954] rounded-2xl bg-gradient-to-r from-[#11652F] to-[#417152]">
      {nowPlaying ? (
        <>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <img
              src={nowPlaying.album.image}
              className="rounded-xl w-10 h-10 absolute opacity-50"
              alt={nowPlaying.album.name}
            />

            <a
              href={nowPlaying.url}
              target="_blank"
              rel="noreferrer"
              className="z-50 text-white"
              title="View on Last.fm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 z-50"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="flex flex-col justify-center items-start flex-1 self-stretch">
            <span
              className="text-white/60 font-light text-xs truncate max-w-[250px]"
              title={nowPlaying.artist}
            >
              {nowPlaying.artist}
            </span>
            <span
              className="text-white font-normal text-base truncate max-w-[250px]"
              title={nowPlaying.song}
            >
              {nowPlaying.song}
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="block w-10 h-10 rounded-xl bg-white/10 animate-pulse" />

          <div className="flex flex-col justify-center items-start flex-1 self-stretch space-y-1">
            <div className="block h-3 w-28 bg-white/10 animate-pulse rounded-md"></div>
            <div className="block h-5 w-36 bg-white/10 animate-pulse rounded-md"></div>
          </div>
        </>
      )}

      <div
        className={`flex flex-col ${
          nowPlaying?.nowPlaying ? "justify-between" : ""
        } h-full items-center`}
      >
        {nowPlaying?.nowPlaying && <NowPlayingBars />}

        <SiSpotify className="w-4 h-4" />
      </div>
    </div>
  );
}

export function NowPlayingBars() {
  return (
    <div className={styles.nowplaying} title="Currently Playing">
      <span />
      <span />
      <span />
    </div>
  );
}
