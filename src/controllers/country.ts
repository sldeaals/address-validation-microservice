import { Request, Response } from 'express';
import { getCountryByCode, fetchCountriesByName } from '../services';
import { sendApiResponse, sendErrorResponse } from '../utils';
import { redis } from '../middlewares';

export async function getCountryByCodeController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { countryCode } = req.params;
    const country = await getCountryByCode(countryCode);

    redis.setex(req.originalUrl, 3600, JSON.stringify(country));
 
    sendApiResponse(res, {
      data: country,
      message: 'Fetched country successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to fetch country',
    });
  }
}

export async function fetchCountriesByNameController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name } = req.params;
    const countries = await fetchCountriesByName(name);

    redis.setex(req.originalUrl, 3600, JSON.stringify(countries));
 
    sendApiResponse(res, {
      data: countries,
      message: 'Fetched country successfully',
    });
  } catch (error) {
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to fetch country',
    });
  }
}
