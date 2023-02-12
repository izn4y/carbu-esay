import express, { Request, Response } from "express";
import { DataProvider } from '../provider/DataProvider'

const router = express.Router();

let dataProvider: DataProvider = new DataProvider();

/**
 * @Service
 * @FetchData
 */

router.post("/search", (request: Request, response: Response) => {

  dataProvider.loadDataXml("La Roche-sur-Yon").then((stationDto: any) => {

    for(let i =0; i < stationDto.length; i++){
      for(let j:number = 0; j < stationDto.length - i - 1; j++){

      }
    console.log(stationDto.length)

    }
  });
});

export default router;
