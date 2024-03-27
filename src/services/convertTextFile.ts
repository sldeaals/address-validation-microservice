import { readTabDelimitedTextFile, convertTextToJson, writeJsonFile } from '../utils';

export async function processTabDelimitedTextFile(): Promise<string> {
  try {
    const fileName = 'cities';
    const currentPath = __dirname;
    const url = `${currentPath}/../mock/allCountries.txt`;
    const lines = readTabDelimitedTextFile(url);
    const jsonData = convertTextToJson(lines);
    const outputDir = `${currentPath}/../data/`;
    const jsonFileName = writeJsonFile(fileName, jsonData, outputDir);

    return jsonFileName;
  } catch (error) {
    console.error('Error processing tab-delimited text file:', error);
    throw error;
  }
}
