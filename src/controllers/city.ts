import { Request, Response } from 'express';
import { getCitiesByCountry } from '../services/city';
import { City } from "../models";
import {
  ApiResponse,
  sendApiResponse,
  sendErrorResponse,
} from '../utils/apiResponse';

export async function getCitiesByCountryController(
  req: Request,
  res: Response<ApiResponse<City[]>>
): Promise<void> {
  const { countryCode } = req.params;
  try {
    const cities = getCitiesByCountry(countryCode);
    sendApiResponse(res, {
      data: cities,
      message: 'Cities fetched successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to fetch cities',
    });
  }
}
