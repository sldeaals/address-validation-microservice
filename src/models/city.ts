export interface City {
  countryCode: string;
  postalCode?: string;
  name?: string;
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
}