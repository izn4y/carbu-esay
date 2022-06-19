import express, { Request, Response } from "express";
import { DataProvider } from "../class/provider/DataProvider";
const router = express.Router();

let dataProvider: DataProvider = new DataProvider();

/**
 * @Service
 * @FetchData
 */

router.post("/search", (request: Request, response: Response) => {

  const priceCompare = (a: any, b: any) => {
    if (a < b) {
      // console.log( a + " < " + b);
    }
    if (a > b) {
      // console.log( a + " > " + b);
    }
  }
  dataProvider.loadDataXml("La Roche-sur-Yon").then((stationDto: any) => {
    stationDto.forEach((gasPrice: any) => {
      // console.log(gasPrice);
      let i: number = 0;
      while (i < gasPrice.carburant_price.length) {
        if (gasPrice.carburant_price[i].nom === "Gazole") {
          priceCompare(gasPrice.carburant_price[i].valeur, gasPrice.carburant_price[i + 1].valeur);
          // console.log(gasPrice.carburant_price[i].valeur);
        }
        i++;
      }
    });
    //   // console.log(stationDto)
    //   console.log(`${stationDto.length} stations trouvées`);
  });
});

export default router;
