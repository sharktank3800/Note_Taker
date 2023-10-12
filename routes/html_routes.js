const router = require("express").Router();
const path = require("path");

// Sends the index.html file as a response 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Sends the notes.html file as a response
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})


module.exports = router;