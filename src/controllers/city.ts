import { Request, Response } from 'express';
import { City, getCitiesByCountryFromFile, getCitiesByCountry } from '../services/city';
import {
  ApiResponse,
  sendApiResponse,
  sendErrorResponse,
} from '../utils/apiResponse';
//getCitiesByCountry
export async function getCitiesByCountryFromFileController(
  req: Request,
  res: Response<ApiResponse<City[]>>
): Promise<void> {
  const { countryCode } = req.params;
  try {
    const cities = await getCitiesByCountryFromFile(countryCode);
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
