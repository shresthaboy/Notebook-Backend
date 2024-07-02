const notesRouter = require("express").Router();
const Note = require("../models/note");

notesRouter.get("/", (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes);
  });
});

notesRouter.get("/:id", (req, res, next) => {
  Note.findById(req.params.id)
    .then((note) => {
      res.json(note);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

notesRouter.post("/api/",(req,res,next)=>{
    const body = req.body;

    if(body.content == null){
        res.status(400).json({
            error: "content missing"
        })
    }
    const note =  new Note({
        content: body.content,
        important: body.important || false,
    });
    console.log(note);
    note.save();
})  
module.exports = notesRouter;
