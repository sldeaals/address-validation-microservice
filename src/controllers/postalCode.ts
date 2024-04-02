import { Request, Response } from 'express';
import { getDistrictsByPostalCode } from '../services';
import { sendApiResponse, sendErrorResponse } from '../utils';

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
