const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000;
let app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home.hbs')
})

app.listen(port, process.env.IP, () => {
    console.log(`Server is running on port ${port}`)
})