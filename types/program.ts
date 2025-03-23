export interface Program {
  uuid: string;
  dateCreated: string;
  title_En: string;
  title_Ar: string;
  title_Localized: string;
  type: string;
  typeLocalized: string;
  fees: number;
  feesCurrency: string;
  currencyLocalized: string;
  duration: number;
  status: string;
  statusLocalized: string;
  startDate: string;
  expiryDate: string;
  description_En: string;
  description_Ar: string;
  description_Localized: string;
  note: string;
  ranking: number;
  photo: string;
  fieldUuid: string;
  fieldName: string;
  universityUuid: string;
  universityName: string;
  programAbout: any[]; // You can extend this type based on actual data
  programRequirement: any[]; // You can extend this type based on actual data
}

export interface ProgramsResponse {
  success: boolean;
  code: string;
  data: {
    result: Program[];
    totalCount: number;
  };
} 

export enum DegreeType {
  Bachelor = "Bachelor",
  Masters = "Masters",
  Associate = "Associate",
  Doctorate = "Doctorate"
}
