export type ApiResponse<T> = {
  data: T;
  code: string;
  success: boolean;
};
