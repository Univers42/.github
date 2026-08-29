#!/usr/bin/env node
/**
 * update-readme-stars.mjs
 *
 * Pulls every public repo from a GitHub org/user and rewrites the
 * marker block in README.md with the ones that meet a star threshold,
 * sorted by star count. Nothing is hardcoded — this is meant to be run
 * on a schedule (see .github/workflows/update-readme.yml) so the README
 * always reflects live data.
 *
 * Env vars:
 *   ORG            GitHub org/user login to scan      (default: Univers42)
 *   MIN_STARS      minimum star count to include       (default: 10)
 *   INCLUDE_FORKS  "true" to also list forked repos     (default: false)
 *   README_PATH    path to the README to edit           (default: README.md)
 *   GITHUB_TOKEN    optional token, raises the API rate limit (60/hr -> 5000/hr)
 *
 * Requires Node 18+ (uses the built-in fetch, no dependencies).
 */

import { readFile, writeFile } from "node:fs/promises";

const ORG = process.env.ORG || "Univers42";
const MIN_STARS = Number(process.env.MIN_STARS || 10);
const INCLUDE_FORKS = process.env.INCLUDE_FORKS === "true";
const README_PATH = process.env.README_PATH || "README.md";
const TOKEN = process.env.GITHUB_TOKEN;

const START_MARKER = "<!-- STARRED_REPOS:START -->";
const END_MARKER = "<!-- STARRED_REPOS:END -->";

async function fetchAllRepos(org) {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version"{r.name}\`](${r.html_url})`;
    const desc = escapeCell(r.description) || "—";
    const lang = r.language || "—";
    return `| ${name} | ${r.stargazers_count} | ${desc} | ${lang} |`;
  });

  return [header, ...rows].join("\n");
}

async function main() {
  const allRepos = await fetchAllRepos(ORG);

  const filtered = allRepos
    .filter((r) => INCLUDE_FORKS || !r.fork)
    .filter((r) => r.stargazers_count >= MIN_STARS)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const table = buildTable(filtered);
  const readme = await readFile(README_PATH, "utf8");

  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(
      `Could not find ${START_MARKER} / ${END_MARKER} markers in ${README_PATH}. ` +
        "Add both marker comments where the table should be injected."
    );
  }

  const updated =
    readme.slice(0, startIdx + START_MARKER.length) +
    "\n\n" +
    table +
    "\n\n" +
    readme.slice(endIdx);

  if (updated !== readme) {
    await writeFile(README_PATH, updated, "utf8");
    console.log(`Updated ${README_PATH}: ${filtered.length} repo(s) with ${MIN_STARS}+ stars.`);
  } else {
    console.log("No changes needed — README already up to date.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
: "2022-11-28",
    "User-Agent": `${org}-readme-updater`,
  };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const repos = [];
  let page = 1;

  while (true) {
    const url = `https://api.github.com/orgs/${org}/repos?type=public&per_page=100&page=${page}`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`GitHub API error ${res.status} on page ${page}: ${await res.text()}`);
    }
    const batch = await res.json();
    repos.push(...batch);
    if (batch.length < 100) break;
    page += 1;
  }

  return repos;
}

function escapeCell(text) {
  return (text || "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();
}

function buildTable(repos) {
  if (repos.length === 0) {
    return `_No public repos with ${MIN_STARS}+ stars yet — help us change that!_`;
  }

  const header = "| Repo | ⭐ | Description | Language |\n|:---|---:|:---|:---|";
  const rows = repos.map((r) => {
    const name = `[\`$
