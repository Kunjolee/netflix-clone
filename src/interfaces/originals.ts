// Generated by https://quicktype.io

import { MovieType, MovieResult } from './movies';

export interface NetflixOriginals extends Omit<MovieType, 'results'> {
  results: OriginalsResult[];
}


export interface OriginalsResult extends Omit<MovieResult, 
  'adult' |
  'media_type' |
  'original_title' |
  'release_date' |
  'video' | 'title'> {}



export enum OriginalsLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
  Ko = 'ko',
}
