# Game of Life

John Conway's Game of Life (1970)

## What is it?

For a playable example, check out [playgameoflife.com](https://playgameoflife.com/)

## So... what is it?

It's a Turing-complete cellular automoton. It's a way of modeling data as squares on a grid that updates itself according to a set of rules. Each cell updates itself according to the state of its neighbors. In the Game of Life, each cell turns on or off, its state is called "alive" or "dead".

- Each cell that is left on its own at the end of a "turn" dies
- Each cell with 2-3 neighbors stays alive
- Each cell with exactly 3 neighbors comes to life
- Cells at the edge of the grid are considered dead. This model doesn't wrap around to the far side of the grid.

These rules seem simple, but they can lead to some interesting mathematical creatures and geometric patterns that crawl their way across the grid as the turns progress. It's also possible to create infinite patterns that generate "gliders" that shoot across the map. See the [Gosper Glider Gun](https://en.wikipedia.org/wiki/Gun_(cellular_automaton))

This particular automaton is a staple of tech history, and has been around since 1970, so there is a wealth of information, patterns and theories about it. It has been used for everything from generating music to emulating entire computer systems. Check out [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns) for some more patterns to play with, and some of the theory behind them.
