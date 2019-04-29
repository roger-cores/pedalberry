var express = require('express');
const fs = require('fs')

var routeFunction = function(codes){
  var router = express.Router();

  router.get('/sample', function(req, res, next) {
    fs.readFile('./sample_asp/sample.asp', (err, data) => {
        if(err) {
          res.status(codes.SERVER_ERROR).send(err)
          return
        }
        res.status(codes.OK).send({data: data.toString()})
    })
  });

  router.post('/', function(req, res, next){
    const { spawn } = require('child_process');

    fs.writeFile('temp.asp', req.body.input, (err) => {
        if (err) throw err;

        const ls = spawn('clingo', ['temp.asp', '--mode=gringo', '--text']);
        response = ''
        ls.stdout.on('data', (data) => {
          response += data
        });

        ls.stderr.on('data', (data) => {
          response = '***'
        });

        ls.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          res.status(codes.OK).send({data: response})
        });
    });
  });

  return router;
}

module.exports = routeFunction;
