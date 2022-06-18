import express, { Request, Response } from "express";
import { DataProvider } from "../class/provider/DataProvider";
const router = express.Router();

let dataProvider: DataProvider = new DataProvider();

/**
 * @Service 
 * @FetchData
 */

router.post("/search", (request: Request, response: Response) => {
  dataProvider.loadDataXml("La Roche-sur-Yon").then((stationDto) => {
    // stationDto.forEach((gasPrice: any) => {
    //   console.log(gasPrice);
    // });
    console.log(stationDto)
    console.log(`${stationDto.length} stations trouvées`);
  });
});

export default router;
