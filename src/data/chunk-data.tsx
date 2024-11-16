import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import type Chunk from '../models/chunk';
import chunkJson from './chunk-data-with-stash-units.json';

const ChunkDataContext = createContext<{
  exportChunkData: () => void;
  clearLocalStorageChunkData: () => void;
  saveChunkDataToLocalStorage: () => void;
  getChunk: (x: number, y: number) => Chunk | undefined;
  setChunk: (x: number, y: number, chunk: Chunk) => void;
}>(null as any);

function coords(x: number, y: number): string {
  return `${x},${y}`;
}

function chunkArrayToMap(chunks: Chunk[]) {
  const chunkMap = new Map<string, Chunk>();

  for (const chunk of chunks) {
    chunkMap.set(coords(chunk.x, chunk.y), chunk);
  }

  return chunkMap;
}

const ChunkDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const LOCAL_STORAGE_KEY = 'CHUNKS';

  const [chunkData, setChunkData] = useState(chunkArrayToMap(chunkJson));


  function chunkMapToArray() {
    return Array.from(chunkData.values());
  }

  function getChunk(x: number, y: number): Chunk | undefined {
    return chunkData.get(coords(x, y));
  }

  function setChunk(x: number, y: number, chunk: Chunk) {
    const _chunkData = new Map(chunkData);
    _chunkData.set(coords(x, y), chunk);
    setChunkData(_chunkData);
  }

  function exportChunkData() {
    const chunks = chunkMapToArray();

    chunks.sort((a, b) => a.y - b.y || a.x - b.x);

    const json = JSON.stringify(chunks);
    const blob = new Blob([json], { type: 'application/json' });

    const anchor = document.createElement('a');
    anchor.download = 'chunk-data.json';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();

    anchor.remove();
  }

  function saveChunkDataToLocalStorage() {
    const chunks = chunkMapToArray();
    const json = JSON.stringify(chunks);
    localStorage.setItem(LOCAL_STORAGE_KEY, json);
  }

  function clearLocalStorageChunkData() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setChunkData(chunkArrayToMap(chunkJson));
  }

  useEffect(() => {
    function loadChunkDataFromLocalStorage() {
      const json = localStorage.getItem(LOCAL_STORAGE_KEY) as string;
      const chunks = JSON.parse(json);
      setChunkData(chunkArrayToMap(chunks));
    }

    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      loadChunkDataFromLocalStorage();
      toast('📂 Local chunk data loaded!', { type: 'info' });
    }
  }, []);

  return (
    <ChunkDataContext.Provider
      value={{
        exportChunkData,
        clearLocalStorageChunkData,
        saveChunkDataToLocalStorage,
        getChunk,
        setChunk,
      }}
    >
      {children}
    </ChunkDataContext.Provider>
  );
};

export { ChunkDataContext, ChunkDataProvider };
