var http = require('http');
http.createServer(function (req, res){
    res.write('Brasil 4 x 0 Servia \n');
    res.end('Bom dia!');

}).listen(3000);