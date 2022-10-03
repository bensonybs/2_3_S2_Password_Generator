const express = require('express')
const exphbs = require('express-handlebars')
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
  console.log(req.body);
  res.render('index')
})






app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
})