const express = require("express")
const dotenv = require("dotenv")
dotenv.config();

const app = express()

const PORT = process.env.PORT

app.get("/", (req, res ) => {
    res.send("hello")
})
app.listen(PORT, () => {
    console.log(`started expresss server on port ${PORT}`)
})
