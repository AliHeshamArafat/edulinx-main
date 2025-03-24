export interface Blog {
  uuid: string;
  dateCreated: string;
  title_En: string;
  title_Ar: string;
  title_Localized: string;
  description_En: string;
  description_Ar: string;
  description_Localized: string;
  details_En: string;
  details_Ar: string;
  details_Localized: string;
  brief_En: string;
  brief_Ar: string;
  brief_Localized: string;
  fieldUuid: string;
  fieldName: string;
  photo?: string;
}
