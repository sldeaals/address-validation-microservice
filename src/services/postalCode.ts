import { getDistrictsByCountry } from "./district";
import { District } from "../models";
import { districts } from '../data';

export function getSectorsByPostalCode(postalCode: string): District[] | [] {
  return districts.filter(district => district?.postalCode === postalCode);
}

export function postalCodeExistsForCity(countryCode: string, districtName: string, postalCode: string): boolean {
  const districts = getDistrictsByCountry(countryCode);
  return districts.some(district => district.name === districtName && district.postalCode === postalCode);
}
