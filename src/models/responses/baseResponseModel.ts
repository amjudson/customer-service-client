export interface BaseResponseModel {
  statusCode: number;
  success: boolean;
  errorMessages?: string[];
}
