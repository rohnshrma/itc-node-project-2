const express = require("express")
const routes = require("./routes/routes")
const app = express()
const PORT = 5000




// middleware
app.use(routes)

app.use(express.static("public"))

// set ejs as view engine
app.set("view engine","ejs")




app.listen(PORT,()=>{
    console.log("server started on port",PORT)
})