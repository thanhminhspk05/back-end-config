import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config(); // important

const app = express();
const PORT = process.env.PORT || 8080;

// config view engine
configViewEngine(app);

// init web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log('Backend is running on the port:', PORT);
});
