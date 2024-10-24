const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const port = 5000;



app.post('/submit',(req,res)=>{
    console.log("Post api");
    const recivedData = req.body;
    console.log(recivedData);

    res.json({
        message: 'Data received successfully',
        recivedData : recivedData ,
    })
})

// app.get('/', (req,res)=>{
//     console.log("Print")
//     res.send("Route")
// })

// app.get('/about', (req,res)=>{
//     res.send('Reached about');
// })

app.listen(port,()=>{
    console.log(`Server is running on ${port} `);
});