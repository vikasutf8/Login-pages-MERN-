import dotenv from 'dotenv'
import express from 'express'
const app = express()
const port =process.env.PORT ;
dotenv.config()


console.log(port) 
mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{
          console.log('connected to MONGODB')
        })
        .catch((err)=>{
          console.log(err)
        })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})