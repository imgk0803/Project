const express = require('express')
const cors = require('cors')
var cookieParser = require('cookie-parser')
const app = express()
const port = 3000
const dbConnect =require('./db')
dbConnect();
const adminRouter = require('./routes/adminRoute')
const userRouter = require('./routes/userRoutes')

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api', adminRouter)
app.use('/api', userRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`
  )
})