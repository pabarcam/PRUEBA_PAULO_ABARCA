const express = require('express')
const hBars = require('express-handlebars')
//const bodyParser = require('body-parser')
const app = express()


app.listen(3000, _ => console.log('Server running at: http://localhost:3000'))



app.use("/css", express.static(__dirname +
  "/node_modules/bootstrap/dist/css"));
app.use('/jquery', express.static(__dirname +
  '/node_modules/jquery/dist'))


app.set('view engine', 'handlebars')

app.engine('handlebars', hBars({
  layoutsDir: __dirname + '/views/',
  partialsDir: __dirname + '/views/partials/'
}))

//RUTAS
app.get('/login', (req, res) => {
  res.render('Inicio', { layout: 'Inicio', urlLogin: req.route.path })
})
