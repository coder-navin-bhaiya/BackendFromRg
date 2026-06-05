// step-1)
 const http = require('http');


 //step-2) creating server
 const server = http.createServer((req,res) =>{
    res.end("First response send by server")
 });
//  console.log(server); o/p = object

//step-3) listen krna hai
 server.listen(4000,()=>{
    console.log("Server is listening at 4000")
 });
