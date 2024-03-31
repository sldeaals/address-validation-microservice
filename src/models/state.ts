import { City } from './city';

export interface State {
  countryCode: string;
  stateCode: string | number;
  name: string;
  cities: City[] | null | undefined;
}
