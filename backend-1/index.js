// require('dotenv').config()
import express from 'express'
const app = express()
const port =process.env.PORT ||4000;



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})