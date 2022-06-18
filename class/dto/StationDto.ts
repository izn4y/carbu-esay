export class StationDto{
  public locationId: number | null;
  public latitude: number | null;
  public longitude: number | null;
  public zip_code: number | null;
  public city: string | null;
  public address: string | null;
  public carburant_price: object[] | null;

  constructor(locationId: number | null,latitude: number | null,longitude: number | null,zip_code: number | null, city: string | null, address: string | null, carburant_price: object[] | null) {
    this.locationId = locationId;
    this.latitude = latitude;
    this.longitude = longitude;
    this.zip_code = zip_code;
    this.city = city;
    this.address = address;
    this.carburant_price = carburant_price;
  }
}
