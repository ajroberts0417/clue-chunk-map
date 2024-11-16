import * as fs from 'fs';

// Define interfaces for the data structures
import StashUnit, { StashChunk } from './src/models/stash-unit';
import type { ClueChunk } from './src/models/clue';
import type Chunk from './src/models/chunk';


// Read the input files
const chunkData: ClueChunk[] = JSON.parse(fs.readFileSync('./src/data/chunk-data.json', 'utf8'));
const stashData: StashChunk[] = JSON.parse(fs.readFileSync('./src/data/stash-unit-data.json', 'utf8'));

// Create a map of stash units keyed by coordinates
const stashMap = new Map<string, StashUnit[]>();
stashData.forEach(chunk => {
    const key = `${chunk.x},${chunk.y}`;
    stashMap.set(key, chunk.stashUnits);

    // Also add stash units to alternate chunks if specified
    chunk.stashUnits.forEach(stashUnit => {
        if (stashUnit.alternateChunks) {
            stashUnit.alternateChunks.forEach(altChunk => {
                const altKey = `${altChunk.x},${altChunk.y}`;
                const existingStashUnits = stashMap.get(altKey) || [];
                stashMap.set(altKey, [...existingStashUnits, stashUnit]);
            });
        }
    });
});

// Add stash units to chunk data
const combinedChunkData: Chunk[] = chunkData.map(chunk => {
    const key = `${chunk.x},${chunk.y}`;
    const stashUnits = stashMap.get(key);

    if (stashUnits) {
        return {
            ...chunk,
            stashUnits
        };
    }
    return chunk;
});

// Write the combined data to a new file
fs.writeFileSync(
    './src/data/chunk-data-with-stash-units.json',
    JSON.stringify(combinedChunkData, null, 2)
);

console.log('Successfully combined chunk data with stash units!');