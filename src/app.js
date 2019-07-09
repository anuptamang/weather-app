const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static direcotry to server
app.use(express.static(publicDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather Info',
        name: 'Anup Tamang'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About App',
        name: 'Anup Tamang'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        text: 'Help info',
        name: 'Anup Tamang'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'philadelphia'
    })
})

app.get('/products', (req, res) => {
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        text: 'Help Page article not found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        text: 'Page not found!'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
});