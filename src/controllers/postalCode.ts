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
      success: true,
      status: 200,
      message: 'Fetched sectors successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 500,
      message: 'Failed to get sectors by postal code',
    });
  }
}
