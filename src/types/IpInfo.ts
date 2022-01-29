import { TCountry } from './common';

export interface IIpInfoDto {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: Uppercase<TCountry>;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}
