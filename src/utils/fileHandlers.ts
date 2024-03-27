import fs from 'fs';
import path from 'path';

interface CitiesData {
  countryCode: string;
  postalCode: string;
  placeName: string;
  adminName1: string;
  adminCode1: string;
  adminName2: string;
  adminCode2: string;
  adminName3: string;
  adminCode3: string;
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
    console.error('Error reading tab-delimited text file:', error);
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
      jsonObject.placeName = fields[2];
      jsonObject.adminName1 = fields[3];
      jsonObject.adminCode1 = fields[4];
      jsonObject.adminName2 = fields[5];
      jsonObject.adminCode2 = fields[6];
      jsonObject.adminName3 = fields[7];
      jsonObject.adminCode3 = fields[8];
      jsonObject.latitude = parseFloat(fields[9]);
      jsonObject.longitude = parseFloat(fields[10]);
      jsonObject.accuracy = parseInt(fields[11], 10);

      jsonData.push(jsonObject as CitiesData);
    });

    return jsonData;
  } catch (error) {
    console.error('Error converting text to JSON:', error);
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
    console.error('Error writing JSON data to file:', error);
    throw error;
  }
}
