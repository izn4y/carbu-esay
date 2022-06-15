export class Station{
    private locationId:number
    private latitude: number;
    private longitude: number;
    private zip_code: number;
    private city: string;
    private address: string;
    private carburant_price: string[];

    constructor(locationId:number, latitude: number, longitude: number, zip_code: number, city: string, address: string, carburant_price: string[]){
        this.locationId = locationId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.zip_code = zip_code;
        this.city = city;
        this.address = address;
        this.carburant_price = carburant_price;
         
    }



}