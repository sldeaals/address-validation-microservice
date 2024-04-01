import fs from 'fs';
import path from 'path';
import { logger } from '../middlewares';

interface CitiesData {
  countryCode: string;
  postalCode: string;
  name: string;
  latitude: number;
  longitude: number;
  accuracy: number;
}

export function readTabDelimitedTextFile(url: string): string[] {
  try {
    const data = fs.readFileSync(url, 'utf-8');
    const lines = data.split('\n');

    return lines;
  } catch (error) {
    logger.error(`Error reading tab-delimited text file: ${error}`);
    throw error;
  }
}

export function convertTextToJson(lines: string[]): CitiesData[] {
  try {
    const jsonData: CitiesData[] = [];

    lines.forEach((line) => {
      const fields = line.split('\t');
      const jsonObject: Partial<CitiesData> = {};
      jsonObject.countryCode = fields[0];
      jsonObject.postalCode = fields[1];
      jsonObject.name = fields[2];
      jsonObject.latitude = parseFloat(fields[9]);
      jsonObject.longitude = parseFloat(fields[10]);
      jsonObject.accuracy = parseInt(fields[11], 10);

      jsonData.push(jsonObject as CitiesData);
    });

    return jsonData;
  } catch (error) {
    logger.error(`Error converting text to JSON: ${error}`);
    throw error;
  }
}

export function writeJsonFile(fileName: string, jsonData: CitiesData[], outputDir: string): string {
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const jsonString = JSON.stringify(jsonData, null, 2);
    const outputFileName = `${fileName}.json`;
    const filePath = path.join(outputDir, outputFileName);

    fs.writeFileSync(filePath, jsonString);

    return outputFileName;
  } catch (error) {
    logger.error(`Error writing JSON data to file: ${error}`);
    throw error;
  }
}
