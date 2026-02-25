// Creating a Server 

const express = require('express')

const app = express()
app.use(express.json())

const notes = []

/* title , description */

// Create a new note
app.post('/notes', (req, res) => {
    notes.push(req.body)



    res.status(201).json({
        message: "Note created successfully",
    })


}
)

// Get all notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Notes retrieved successfully",
        notes: notes

    })
})

// Delete a note by index
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "Note deleted successfully",
    })
})


// 
app.patch('/notes/:index', (req, res) => {

    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "Note updated successfully",
    })
})

module.exports = app;