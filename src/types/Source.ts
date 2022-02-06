import { TCountry, TLanguage } from './common';

export interface ISourceDto {
  category: string;
  country: TCountry;
  description: string;
  id: string;
  language: TLanguage;
  name: string;
  url: string;
}

export interface ISourceResponse {
  sources: ISourceDto[];
  status: string;
}
