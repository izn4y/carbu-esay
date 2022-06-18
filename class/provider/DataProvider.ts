import fs from "fs";
import xml2js from "xml2js";
import { StationDto } from "../dto/StationDto";
import iconv from "iconv-lite";

/**
 *
 * @export
 * @class DataProvider
 * @Dto {StationDto}
 * 
 */

export class DataProvider {

  private station: StationDto;
  private totalGasStation: object[];
  private readonly XML_PATH: string;
  private readonly ENCODING: string;

  constructor() {
    this.station = new StationDto(null, null, null, null, null, null, null);
    this.totalGasStation = [];
    this.XML_PATH = "./PrixCarburants_instantane.xml";
    this.ENCODING = "iso-8859-1";
  }

  private async loadDataDecode(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        let xmlOpenFoRead: string = iconv.decode(fs.readFileSync(this.XML_PATH),this.ENCODING);
        resolve(xmlOpenFoRead);
      } catch (error) {
        reject(error);
      }
    });
  }
  public async loadDataXml(pCity:string): Promise<Array <object> > {
  
    await this.loadDataDecode().then((result: string) => {
      xml2js.parseString(result, (err, result: any) => {
        
        if (err) console.log(err);
        this.totalGasStation = [];
        result.pdv_liste.pdv.forEach((element: any) => {
          this.station = new StationDto(null,null,null,null,null, null,null);
            
          if (element.ville == pCity) {
            this.station.address = element.adresse.toString();
            this.station.locationId = element["$"].id;
            this.station.latitude = element["$"].latitude;
            this.station.longitude = element["$"].longitude;
            this.station.zip_code = element["$"].cp;
            this.station.city = element.ville.toString();

            let i: number = 0;
            this.station.carburant_price = [];
            while (i < element.prix.length) {
              this.station.carburant_price.push(element.prix[i].$);
              i++;
            }
            this.totalGasStation.push(this.station);
          }
        });
        // console.log(this.totalGasStation);
        // console.log(`${this.totalGasStation.length} stations trouvées`);
      });
    });
    return this.totalGasStation;
  }
}
