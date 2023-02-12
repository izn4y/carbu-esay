export interface StationDto {
  locationId: string;
  latitude: string;
  longitude: string;
  zip_code: string;
  city: string;
  address: string;
  carburant_price: CarburantPrice;
}

export interface CarburantPrice {
  nom: string;
  id: string;
  maj: string;
  valeur: string;
}
