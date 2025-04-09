import data from '../jsons/diaries.json';
import type { Diary, newDiaryEntry, NonSensitiveInfoDiary } from '../types.t';

const diaries: Diary[] = data as Diary[];

export const getEntries = () => diaries;

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiary[] => diaries.map(({ id, date, weather, visibility }) => ({
  id,
  date,
  weather,
  visibility
}));

export const findById = (id: number): NonSensitiveInfoDiary | undefined => {
  const entry = diaries.find(d => d.id === id);
  if (entry != null) {
    const { comment, ...rest } = entry;
    return rest;
  };

  return undefined;
};

export const addDiary = (newDiaryEntry:newDiaryEntry): Diary => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  };

  diaries.push(newDiary);

  return newDiary;
};


export function addEntry(date: string, weather: string, visibility: string, comment: string): newDiaryEntry {
  throw new Error('Function not implemented.');
}
/* Demonstration of type omission */

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo(); 
// diariesWithoutSensitiveInfo[0].comment