import { Response } from 'express';

interface ApiResponseOptions<T> {
  data?: T;
  success: boolean;
  status: number;
  message?: string | null;
}

export const sendApiResponse = <T>(
  res: Response,
  { data, success, status, message }: ApiResponseOptions<T>
) => {
  res.status(status).json({ success, data, message });
};

export const sendErrorResponse = (
  res: Response,
  { error, status, message }: { error: unknown, status: number, message?: string }
) => {
  res.status(status).json({ success: false, error, message });
};
