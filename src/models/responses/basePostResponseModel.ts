import {FetchBaseQueryError} from '@reduxjs/toolkit/query'
import {SerializedError} from '@reduxjs/toolkit'

export default interface BasePostResponseModel {
  statusCode?: number;
  success?: boolean;
  errorMessages?: string[];
  isLoading?: boolean;
  error?: any;
}
