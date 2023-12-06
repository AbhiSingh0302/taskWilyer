const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const mongoConnection = require("./db");
const Item = require("./models/Item");

mongoConnection();

app.use("/api/items",async (req,res) => {
    try {
        const {items} = req.body;
        console.log(items);
        const postData = await Item.create({items});
        res.json("success")
    } catch (error) {
        res.json({error: error});
    }
})

app.listen(process.env.PORT,() => {
    console.log("serving on port "+process.env.PORT);
})