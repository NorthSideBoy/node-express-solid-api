export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface Diary {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

//export type NonSensitiveInfoDiary = Pick<Diary, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiary = Omit<Diary, 'comment'>

export type NewDiaryEntry = Omit<Diary, 'id'>
