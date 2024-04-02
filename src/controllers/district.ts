import { Request, Response } from 'express';
import { getDistrictsByCountry, getDistrictsByPostalCode } from '../services';
import { City } from '../models';
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

export async function getDistrictsByPostalCodeController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { postalCode } = req.params;
    const cities = getDistrictsByPostalCode(postalCode);

    sendApiResponse(res, {
      data: cities,
      message: 'Fetched districts successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to get districts by postal code',
    });
  }
}
