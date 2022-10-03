const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
const app = express()
const PORT = 3000
//Set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//Body Parser
app.use(express.urlencoded({ extended: true }))

//Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  console.log('Random password is: ', password)
  res.render('index', {password, options})
})






app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
})