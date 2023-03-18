import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/userRoute"
import cors from "cors"
const app = express()

dotenv.config();

const MONGOURL = process.env.MONGOURL as string
app.use(express.json())
app.use(cors());
app.use('/user', userRouter)

mongoose.connect(MONGOURL)


app.listen(3000, () => {
    console.log("App working")
})