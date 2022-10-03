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
  const password = generatePassword(req.body)
  console.log('Random password is: ', password)
  res.render('index', {password})
})






app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
})