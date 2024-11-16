type StashUnit = {
  difficulty: string;
  type: string;
  location: string;
  items: string[];
  chunk?: { x: number; y: number };
  alternateChunks?: { x: number; y: number }[];
};

export type StashChunk = {
  x: number;
  y: number;
  stashUnits: StashUnit[];
};

export default StashUnit;
