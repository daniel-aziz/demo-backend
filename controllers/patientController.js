const { app } = require('./middleware/appMiddleware')

app.post('/addOne', (req, res) => {

})

app.get('/getAll', (req, res) => {
    res.status(200).json({ message: "Success!" })
})


