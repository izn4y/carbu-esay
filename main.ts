import express, { Application } from 'express';
import {DataProvider} from './class/provider/DataProvider'

const app :Application = express();
const port: number = 3000;

/**
 * @Express configuration
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * @Router configuration
 */
let dataProvider = new DataProvider()
dataProvider.loadDataXml()
app.use((req, res, next) => {
  res.status(404).json({Error:`Not found ${req.url}`});
});



/**
 * @Run configuration
 */

    app.listen(port, () => {
      console.log(`Server started on port http://localhost:${port}`);
    });

