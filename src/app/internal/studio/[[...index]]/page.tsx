"use client";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../../sanity.config";

const isDev =
  process.env.NODE_ENV === "development" ||
  !process.env.NODE_ENV ||
  process.env.NEXT_PUBLIC_ENV === "development" ||
  !process.env.NEXT_PUBLIC_ENV;

export default function StudioPage() {
  return isDev ? <NextStudio config={config} /> : null;
}
