import { Request, Response } from 'express';
import { getSectorsByPostalCode } from '../services';
import { sendApiResponse, sendErrorResponse } from '../utils';

export async function getSectorsByPostalCodeController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { postalCode } = req.params;
    const cities = getSectorsByPostalCode(postalCode);

    sendApiResponse(res, {
      data: cities,
      message: 'Fetched sectors successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to get sectors by postal code',
    });
  }
}
