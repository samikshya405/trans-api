import express from "express";

import 'dotenv/config.js'
import morgan from "morgan";
import cors from 'cors'
import { connectMongo } from "./src/config/connectMongo.js";
import userRouter from './src/router/userRouter.js'
import transactionRouter from './src/router/transactionRouter.js'


const app = express()

app.use(cors())

connectMongo()

const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use('/api/v1/users', userRouter )
app.use('/api/v1/transactions',transactionRouter)


app.listen(PORT, (error)=>{
    error ? console.log(error): console.log("server running in port ", PORT);

})
