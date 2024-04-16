export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  [key: string]: string;
}

export interface Translations {
  [key: string]: string;
}

export interface IdData {
  root: string;
  suffixes: string[];
}

export interface Demonyms {
  [key: string]: string;
}

export interface Maps {
  [key: string]: string;
}

export interface GiniData {
  [key: string]: number;
}

export interface CarData {
  [key: string]: string;
}

export interface CapitalInfo {
  [key: string]: unknown;
}

export interface PostalCodeData {
  [key: string]: unknown;
}

export interface Country {
  name: { [key: string]: string };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: IdData;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Language;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: GiniData;
  fifa: string;
  car: CarData;
  timezones: string[];
  continents: string[];
  flags: { [key: string]: string };
  coatOfArms: { [key: string]: string };
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCodeData;
}
