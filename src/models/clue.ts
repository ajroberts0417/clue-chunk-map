type Clue = {
  type: string;
  clueHint?: string;
  solution?: string;
  location?: string;
  itemsRequired?: string[];
  alternateChunks?: { x: number; y: number; notes?: string }[];
  creatures?: {
    name: string;
    chunks: {
      x: number;
      y: number;
      location: string;
      notes?: string;
    }[];
  }[];
};

export type ClueChunk = {
  x: number;
  y: number;
  beginnerClues?: Clue[];
  easyClues?: Clue[];
  mediumClues?: Clue[];
  hardClues?: Clue[];
  eliteClues?: Clue[];
  masterClues?: Clue[];
};


export default Clue;

export type ClueDifficulty =
  | 'Beginner'
  | 'Easy'
  | 'Medium'
  | 'Hard'
  | 'Elite'
  | 'Master';
