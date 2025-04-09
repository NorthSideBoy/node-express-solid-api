import data from '../jsons/diaries.json';
import type { Diary } from '../types.t';

const diaries: Diary[] = data as Diary[];

export const getEntries = () => diaries;

export const addEntry = () => null;
