[![make.fun](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/maelaozera/u-po-pu-five-seconds-to-explain-the-glass-934d9949/rank.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/maelaozera/u-po-pu-five-seconds-to-explain-the-glass-934d9949/reward.svg)](https://make.fun/competitions/u-po-pu-five-seconds-to-explain-the-glass-934d9949)

# Five Seconds to Explain the Glass

A make.fun bounty entry: the one sentence a house cat would say in its own
defence, in the five seconds after sweeping a glass off the table.

## The entry

> It wasn't an accident, it was a scheduled demolition.

One sentence, 53 characters. No apology, no confession — just a cat that
planned the whole thing and feels absolutely no remorse about it.

## How it works

`main.ts` (Node 22) assembles the sentence from three labelled segments and
writes it to `/output/entry.txt`. The output is fully deterministic: every
run produces the exact same bytes.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
