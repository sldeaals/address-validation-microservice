import { City } from "./city";
import { cities } from '../data';

export function getSectorsByPostalCode(postalCode: string): City[] | [] {
  return cities.filter(city => city?.postalCode === postalCode);
}
