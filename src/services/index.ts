import express, { Request, Response } from "express";
import { DataProvider } from "../provider/DataProvider";
import queryString from "query-string";

const router = express.Router();

let dataProvider: DataProvider = new DataProvider();

/**
 * @Service
 * @FetchData
 */

router.get("/search", async (request: Request, response: Response) => {

  const { gas, city } = request.query;
  if (gas && city) {
    const gasString = typeof gas === "string" ? gas : gas.toString();
    const cityString = typeof city === "string" ? city : city.toString();

    await dataProvider.loadDataXml(cityString).then((stationDto: any) => {

      
      if(stationDto=== null){return response.status(404).json({Error:"Aucune station trouvée",City:cityString})}
      for (let i = 0; i < stationDto.length - 1; i++) {
        for (let j = 0; j < stationDto.length - i - 1; j++) {
          let station1 = stationDto[j];
          let station2 = stationDto[j + 1];
          if(station1.carburant_price.includes(gasString)){
            let gasPrice1 = parseFloat(station1.carburant_price.find((fuel: { nom: string }) => fuel.nom === gasString).valeur);
            let gasPrice2 = parseFloat(station2.carburant_price.find((fuel: { nom: string }) => fuel.nom === gasString).valeur);
            if (gasPrice1 > gasPrice2) {
              stationDto[j] = station2;
              stationDto[j + 1] = station1;
            }
          }
        }
      }
      response.status(200).json(stationDto);
    })
    .catch((error) => {
      console.error(error);
    });
  }


});

export default router;
