const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');



const app=express();

const route=require('./routes/route');
mongoose.connect('mongodb://localhost:27017/chantiContacts');

mongoose.connection.on('connected',function(){
    console.log('Connected to database @27017');
});

mongoose.connection.on('error',function(err){
    if(err){
        console.log('Error in databse'+err);
    }
});

const port=process.env.PORT||8282;



//Middlewares that's gonna be used in our application
app.use(cors());


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',route);


app.get('/',function(req,res){
    res.send('Hello from server');
})

app.listen(port,function(err){
    if(err){
        console.log("error" +err);
    }
    else{
        console.log('Server running on port :8282');
    }

})


