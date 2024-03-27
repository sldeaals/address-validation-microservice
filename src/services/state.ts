import { State } from "../models";
import { states } from '../data';

export function getStatesByCountryCode(countryCode: string): State[] | [] {
  return states.filter(state => state.countryCode === countryCode);
}

export function stateExistsForCountry(countryCode: string, stateName: string): boolean {
  return states.some(state => state.countryCode === countryCode && state.name === stateName);
}
