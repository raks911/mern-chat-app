const express=require('express');
const app=express();//instance of express library
const cors=require("cors");
const http=require("http");

const {Server}=require('socket.io');
const server=http.createServer(app);
app.use(cors());
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3001",
        methods:["GET","POST"],
    }
}) 
io.on("connection",(socket) => {

    socket.on("send_message",(data)=>{
        socket.broadcast.emit("recieve_message",data);
    })
})
server.listen(3005,() => {
    console.log("server is runnnig")
})