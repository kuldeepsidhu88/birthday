console.log("Hello from Node");

var express = require('express');
var bodyParser = require('body-parser');

var app = new express();
var router = express.Router();

app.use(bodyParser());
app.use(express.static(__dirname + '/view'));
app.use('/css',express.static('css'));
app.use('/js',express.static('js'));
app.use('/font',express.static('font'));
app.use('/',router);

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Running at port : '+port);

/* Routing - Start */
router.get('/',function(req,res){
    res.sendFile('index.html');
});







