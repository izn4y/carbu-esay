import fs from "fs";
import xml2js from "xml2js";
import { Station } from "../dto/Station";

export class DataProvider {
  public station: Station;
  //   private locationId: number;
  //   private latitude: number;
  //   private longitude: number;
  //   private zip_code: number;
  //   private city: string;
  //   private address: string;
  //   private price: number[];

  constructor() {
    this.station = new Station();
  }

  public loadDataXml() {
    const parser = new xml2js.Parser();
    fs.readFile("./PrixCarburants_instantane.xml", "utf8", (err, data) => {
      parser.parseString(data, (err, result) => {
        result.pdv_liste.pdv.forEach((item: any) => {
          console.log(item);
        });
      });
    });
  }
}
