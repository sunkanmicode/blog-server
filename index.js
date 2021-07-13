const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const app = express();

dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONOGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const database = mongoose.connection;
database.on('open', ()=>{
    console.log('database connected..');
}).on('error', ()=>{
    console.log("connection error", error);
});
// .then(console.log("connected.."))
// .catch((err) =>console.log(err))



const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

const userRoute = require("./routes/users");
app.use("/users", userRoute);

app.listen("5000", ()=>{
    console.log('server is running ...');
})