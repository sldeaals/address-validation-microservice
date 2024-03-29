import { Request, Response, NextFunction } from 'express';
import Redis from 'ioredis';
import { sendApiResponse } from '../utils';

let redisClient: Redis | null = null;

export function createRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis();
  }
  return redisClient;
}

export const redis = createRedisClient();

export const checkCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cachedData = await redis.get(req.originalUrl);

  if (cachedData) {
    sendApiResponse(res, {
      data: JSON.parse(cachedData),
      message: 'Success',
    });
  } else {
    next();
  }
};
