var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'));

app.get('/',function ( req, res){
     res.sendFile(__dirname + '/home.html');

});

app.listen(app.get('port'),function(){
	console.log("node app is running at local host:" + app.get('port'));
});