import { City } from './city';

export interface State {
  countryCode: string;
  stateCode: string;
  name: string;
  cities: City[] | null | undefined;
}
