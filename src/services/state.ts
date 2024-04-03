import { State } from "../models";
import { states } from '../data';
import { searchByField } from '../utils';

export function getStatesByCountryCode(countryCode: string): State[] | [] {
  return states.filter(state => state.countryCode === countryCode);
}

export function stateExistsForCountry(countryCode: string, stateName: string): boolean {
  return states.some(state => state.countryCode === countryCode && state.name === stateName);
}

export function getStatesByName(name: string): State[] | [] {
  return searchByField(states, 'name', name);
}
