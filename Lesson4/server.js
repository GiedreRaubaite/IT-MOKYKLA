const http = require('http');
const port = 5000;
var fs = require('fs');


http.createServer((req, res) => {
    const headers = {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods' : 'OPTIONS, POST, GET',
        'Access-Control-Max-Age':'259200',
    };
}); 
