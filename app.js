const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', (req, res) => {
    let dataInput = req.body.data.split('\n')
    let data = []
    dataInput.forEach(e => {
        if (e) data.push(e)
    })
    data = data.sort(_=> 0.5 - Math.random())
    res.render('result', {data})
})

app.listen(PORT, _=> {
    console.log(`listening port ${PORT} 🔥`);
})