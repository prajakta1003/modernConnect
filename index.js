require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const projectRoute = require("./routes/projectRoute");
const postRoute = require("./routes/postRoute");
const collaborateRoute = require("./routes/collaborateRoute");



const app = express();

///middleware

app.use(express.json())
app.use(cors())

app.use("/user", userRoute)
app.use("/project", projectRoute)
app.use("/post", postRoute)
app.use("/collaborate", collaborateRoute)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(4000, () =>{
        console.log("Server Listning");
    })
}).catch((error) => {
    console.log(error)
})
