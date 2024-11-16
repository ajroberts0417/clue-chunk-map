import type { Clue, StashUnit } from '.';

type Chunk = {
  x: number;
  y: number;
  beginnerClues?: Clue[];
  easyClues?: Clue[];
  mediumClues?: Clue[];
  hardClues?: Clue[];
  eliteClues?: Clue[];
  masterClues?: Clue[];
  stashUnits?: StashUnit[];
};

export default Chunk;
