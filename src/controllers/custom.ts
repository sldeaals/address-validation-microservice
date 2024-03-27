import { Request, Response } from 'express';
import { processTabDelimitedTextFile } from '../services';
import {
  sendApiResponse,
  sendErrorResponse,
} from '../utils/apiResponse';

export async function processTextFileController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const jsonFileName = await processTabDelimitedTextFile();
    sendApiResponse(res, {
      data: jsonFileName,
      success: true,
      status: 200,
      message: `JSON file '${jsonFileName}' created successfully.`,
    });
  } catch (error) {
    console.error("Error processing text file:", error);
    sendErrorResponse(res, {
      error: error instanceof Error ? error.message : "Unknown error",
      status: 500,
      message: "Failed to process text file.",
    });
  }
}
