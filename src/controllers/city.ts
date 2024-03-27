import { Request, Response } from 'express';
import { getCitiesByCountry, City } from '../services/city';
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
    const cities = await getCitiesByCountry(countryCode);
    sendApiResponse(res, {
      data: cities,
      success: true,
      status: 200,
      message: 'Cities fetched successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 500,
      message: 'Failed to fetch cities',
    });
  }
}
