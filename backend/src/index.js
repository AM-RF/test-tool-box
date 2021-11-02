const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/index')

app.set('port', 3000)

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', router)

app.listen(app.get('port'), () => {
  console.log('server runing')
})

module.exports = app
