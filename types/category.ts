export interface Category {
  uuid: string;
  dateCreated: string;
  name_En: string;
  name_Ar: string;
  name_Localized: string;
  logo?: string;
}

export interface CategoriesResponse {
  success: boolean;
  code: string;
  data: {
    result: Category[];
    totalCount: number;
  };
} 