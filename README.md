# The Long Roast: Lawmakers and the File They Cannot Convert

[![u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Krwanz/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Krwanz/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

My entry for the [The Long Roast: Lawmakers and the File They Cannot Convert bounty](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
on [make.fun](https://make.fun): one satirical sentence roasting lawmakers who
regulate AI, crypto or the internet but cannot convert a file to PDF.

## The entry

> They write the laws that tell artificial intelligence how to behave, yet their own AI bill only became law after an intern showed them where Save as PDF lives.

One sentence, 159 characters. The setup grants the lawmakers their authority —
they write the laws that tell AI how to behave — and the punch undercuts it
with the file they cannot convert: their own bill only became law once an
intern showed them where Save as PDF lives. The punch lands on the last words,
and the detail is specific (an intern, a button they could not find) rather
than a worn tech-illiteracy cliché.

## How it works

`main.ts` (Node 22+, TypeScript run as-is) writes the sentence to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The line is
assembled from two parts — the setup and the punch — and the program validates
its own output before writing: 1–320 characters, exactly one sentence, and it
must name the file the lawmakers cannot convert (PDF). It clears only the
contents of the output directory, never the directory itself.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Bounty

- Bounty: https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
- make.fun: https://make.fun
- Prize: $2 split across the top 10 (1st $0.63); deadline 26 Nov 2026 11:50 UTC
