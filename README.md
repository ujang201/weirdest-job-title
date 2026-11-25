# Weirdest Job Title — Senior Vice President of Apologizing to Geese

[![make.fun · u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/ujang201/weirdest-job-title/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/leaderboard)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/ujang201/weirdest-job-title/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

Entry for the [make.fun](https://make.fun/?ref=wfjv7kgb) bounty
**u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922**
(Weirdest Job Title: Blind Judge Showdown, $5, top 10 places paid).

## The entry

> **Senior Vice President of Apologizing to Geese** — 45 characters

A perfectly ordinary executive rank, a formal duty, and a target no
company would ever employ someone to apologize to. It reads like a
real job on a business card — and then the geese show up.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that one title —
nothing else, no trailing newline — to `$OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`). It validates the title first, the same
way the sealed scorer does: 1–60 characters, not only whitespace.
After writing, it reads the file back and fails unless the bytes match
the title exactly.

## Run

```sh
node main.ts
# or: OUTPUT_DIR=/tmp/jobtitle-out node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
