const express = require('express')
const app = express()

//time 
 app.use((req,res,next)=>{
     let hours=new Date().getHours()
     console.log(hours)
     let dates=new Date().getDay()
     // console.log(hours)
     console.log(dates)
     if((hours<9 || hours>17) || (dates ==6 || dates ==0 )) {
         return res.sendFile(__dirname+'/public/close.html')
    }
    else  next()
 })
 app.use(express.static('public'))

const port = 5000
app.listen(port,(err)=>{
    err ? console.log(err) : console.log('the server is runing on port 5000')
})