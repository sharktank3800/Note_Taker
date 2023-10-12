const router = require("express").Router();
const db = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// GET route to retrieve notes
router.get("/api/notes",  (req, res) => {
    res.json(db);
});

// POST toute to add a new note
router.post("/api/notes", (req, res) => {
   
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };

    db.push(newNote);
    // TO persist changes
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});


// router.delete("/api/notes/:id", (req, res) => {
//     const id = req.params.id;
    
//     // filter the note with given id , update the db
//     const updatedDb = db.filter(note => note.id !== id);

//     // if note was removed update the db array
//     if(updatedDb.length < db.length){
//         db = updatedDb;
//         fs.writeFileSync("./db/db.json", JSON.stringify(db))
//     }
//     res.json(db);
    
    
// })

module.exports = router;