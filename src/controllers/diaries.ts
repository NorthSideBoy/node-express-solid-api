import data from '../jsons/diaries.json';
import type { Diary, NewDiaryEntry, NonSensitiveInfoDiary } from '../types';

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

export const addDiary = (NewDiaryEntry: NewDiaryEntry): Diary => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...NewDiaryEntry
  };

  diaries.push(newDiary);

  return newDiary;
};
/* Demonstration of type omission */

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo(); 
// diariesWithoutSensitiveInfo[0].comment