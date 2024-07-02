import {FetchBaseQueryError} from '@reduxjs/toolkit/query'
import {SerializedError} from '@reduxjs/toolkit'

export default interface BaseResponseModel {
  statusCode?: number;
  success?: boolean;
  errorMessages?: string[];
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
}
