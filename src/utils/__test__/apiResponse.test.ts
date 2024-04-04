import { Response } from 'express';
import { sendApiResponse, sendErrorResponse } from '../apiResponse';

describe('sendApiResponse', () => {
  let mockResponse: Partial<Response>;
  let res: Response;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    res = mockResponse as Response;
  });

  it('should send a successful response with the provided data', () => {
    const data = { message: 'Test message' };
    sendApiResponse(res, { data });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data,
      message: undefined,
    });
  });

  it('should send a response with custom status code and message', () => {
    const status = 400;
    const message = 'Test error message';
    sendApiResponse(res, { status, message });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: undefined,
      message,
    });
  });

  it('should send a response with default success status and message if not provided', () => {
    sendApiResponse(res, {});
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: undefined,
      message: undefined,
    });
  });
});

describe('sendErrorResponse', () => {
  let mockResponse: Partial<Response>;
  let res: Response;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    res = mockResponse as Response;
  });

  it('should send an error response with the provided error, status, and message', () => {
    const error = new Error('Test error');
    const status = 500;
    const message = 'Test error message';
    sendErrorResponse(res, { error, status, message });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false, error, message });
  });

  it('should send an error response with default status and message if not provided', () => {
    const error = new Error('Test error');
    sendErrorResponse(res, { error });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error,
      message: undefined,
    });
  });
});
