import { Response } from 'express';

export interface ApiResponse<T> {
  data?: T;
  success?: boolean;
  status?: number;
  message?: string | null;
}

export const sendApiResponse = <T>(
  res: Response,
  { data, success = true, status = 200, message }: ApiResponse<T>
) => {
  res.status(status).json({ success, data, message });
};

export const sendErrorResponse = (
  res: Response,
  { error, status = 500, message }: { error: unknown, status?: number, message?: string }
) => {
  res.status(status).json({ success: false, error, message });
};
