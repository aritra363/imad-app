var express = require('express');
var morgan = require('morgan');
var path = require('path');
//var pool=require('pg').Pool;
var app = express();
app.use(morgan('combined'));
/*var config={
    user : "aritrapaul363",
    database : "aritrapaul363@gmail.com",
    host: "db.imad.hasura-app.io",
    port:"5432",
    password:process.env.DB_PASSWORD
};*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get ('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
/*var pool=new Pool(config);
app.get('/test-db', function (req, res) {
pool.query('select * from test',function(err,result)
{
    if (err)
    {
        res.status(500).send(err.toString());
    }
    else
    {
        res.send(JSON.strinify(result));
    }
})  
});*/


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/article1', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','art.html'));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','art.html'));
});
app.get('/ui/main.js', function (req, res) {
 res.sendFile(path.join(__dirname,'ui','main.js')); 
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
