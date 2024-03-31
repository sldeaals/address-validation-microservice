import { Request, Response } from 'express';
import { getDistrictsByCountry } from '../services/district';
import { City } from "../models";
import {
  ApiResponse,
  sendApiResponse,
  sendErrorResponse,
} from '../utils/apiResponse';

export async function getDistrictsByCountryController(
    req: Request,
    res: Response<ApiResponse<City[]>>
  ): Promise<void> {
    const { countryCode } = req.params;
    try {
      const districts = getDistrictsByCountry(countryCode);
      sendApiResponse(res, {
        data: districts,
        message: 'Districts fetched successfully',
      });
    } catch (error) {
      sendErrorResponse(res, {
        error: error instanceof Error ? error.message : 'Unknown error',
        message: 'Failed to fetch districts',
      });
    }
  }