import { type NewDiaryEntry, Visibility, Weather } from "../types";

const parseComment = (commentFromRequest: unknown): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment');
  }

  //@ts-expect-error request body.comment type is unknow
  return commentFromRequest;
};

const parseDate = (dateFromRequest: unknown): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date');
  };

  //@ts-expect-error request body.date type is unknow 
  return dateFromRequest;
};

const parseWeather = (weatherFromRequest: unknown): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error(`Incorrect or missing weather this must be: ${Object.values(Weather).toString()}`);
  };

  //@ts-expect-error request body.weather type is unknow 
  return weatherFromRequest;
};

const parseVisibility = (visibilityFromRequest: unknown): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error(`Incorrect or missing visibility this must be: ${Object.values(Visibility).toString()}`);
  };

  //@ts-expect-error request body.visibility type is unknow
  return visibilityFromRequest;
};

const isVisibility = (param: any): boolean => Object.values(Visibility).includes(param);

const isWeather = (param: any): boolean => Object.values(Weather).includes(param);

const isString = (string: unknown): boolean => typeof string === 'string';

const isDate = (date: any): boolean => Boolean(Date.parse(date));

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };

  return newEntry;
};

export default toNewDiaryEntry;