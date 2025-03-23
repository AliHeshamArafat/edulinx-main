export interface University {
  uuid: string;
  dateCreated: string;
  name_En: string;
  name_Ar: string;
  name_Localized: string;
  description_En: string;
  description_Ar: string;
  description_Localized: string;
  entryLevel: string;
  ranking: number;
  longitude: number;
  latitude: number;
  logo: string;
  photo: string;
  url: string;
  countryUuid: string;
  countryName: string;
  requirements: any[];
} 