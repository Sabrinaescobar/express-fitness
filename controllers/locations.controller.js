const express = require("express")
const locations = express.Router();

const locationsData = require("../models/location.model.js")

locations.get("/", (req, res) => {
    res.json(locationsData)
})

/*locations.get("/:id", (req, res) => {
    const { id } =  req.params;
    if(bookmarksData[id]) {
        res.json(bookmarksData[id])
    } else {
        res.status(404).send("no bookmark found - sorry")
    }
})*/

module.exports = locations