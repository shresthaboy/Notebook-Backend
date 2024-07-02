//SIMPLE HTTP SERVER or a simple REST api
// const http = require('http');
// // http library is installed while installing node

// const app = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type': 'text/html'})
//     response.end('<h1>Hello World</h1>')
// })

// const PORT = 3001
// app.listen(PORT);
// console.log(`Running on http://localhost:${PORT}`);

// Now creating a server using Express 
// RESTful API
const express = require ('express');
const app2 = express();

let notes=[
    {
        id:1,
        content:'This is the first note',
        important: true
    },
    {
        id: 2,
        content: "Ubiya Derma Report",
        important: true
    }
]
// Defining endpoints
app2.get('/',(req,res)=>{
    res.send('Hello World');
})

app2.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app2.get('/api/notes/:id',(req,res)=>{
    const id = req.params.id;
    const note = notes.find(n => n.id === Number(id));

    if(note){
        res.json(note);
    }else{
        res.status(404).end(); 
    }
})

app2.delete('/api/notes/:id',(req,res)=>{
    const id = Number(req.params.id);
    note = notes.filter(n=> n.id !== id)
    // creates a new array which includes only the note that do not have the specified id
   res.json(note);
   
})

const PORT1 = 3002;
app2.listen(PORT1,()=>{
    console.log(`Server running on http://localhost:${PORT1}`)
})