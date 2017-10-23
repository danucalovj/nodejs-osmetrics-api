// *****************************************************
// https://github.com/danucalovj/nodejs-osmetrics-api
// *****************************************************

// Express.js
var express = require('express');
var app = express();

// https://github.com/oscmejia/os-utils
var os = require('os-utils');

// os libraries: npm install os --save
var os2 = require('os');

// Secret Key
var secretKey = 'rgD3NRHTYEwz9Ge9TpDPTljwmJeZz0hB';

var responseMessage = JSON.stringify({
  "hostName": os2.hostname(),
  "networkInterfaces": os2.networkInterfaces(),
  "CPUs": os2.cpus(),
  "osPlatform": os.platform(),
  "osRelease": os2.release(),
  "cpuCount": os.cpuCount(),
  "freeMem": os.freemem(),
  "totalMem": os.totalmem(),
  "freeMemPercentage": os.freememPercentage(),
  "sysUptime": os.sysUptime(),
  "loadAvg1": os.loadavg(1),
  "loadAvg5": os.loadavg(5),
  "loadAvg15": os.loadavg(15)      
});

console.log(responseMessage);

// App
app.get('/all/:secretKey', function(req, res){
  if(req.params.secretKey === 'rgD3NRHTYEwz9Ge9TpDPTljwmJeZz0hB'){  
    res.send(responseMessage);
  }
});

app.listen(80, function(){
  console.log("Express is listening on port 80!");
})
