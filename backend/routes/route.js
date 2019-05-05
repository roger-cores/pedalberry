var express = require('express');
const fs = require('fs')

var routeFunction = function(codes){
  var router = express.Router();

  router.get('/sample', function(req, res, next) {
    fs.readFile('./asp/sample.asp', (err, data) => {
        if(err) {
          res.status(codes.SERVER_ERROR).send(err)
          return
        }
        res.status(codes.OK).send({data: data.toString()})
    })
  });

  router.post('/', function(req, res, next){

    let atoms = {}

    const { spawn } = require('child_process');

    // For Shorthand
    let re = /([a-z]+\()([a-z]+)([0-9]+)(\.\.)([0-9]+)(,[a-z0-9]+)?(\)\.)/g
    // For Collecting atoms
    let re2 = /([a-z0-9]+)\(([a-z0-9]+)(,[a-z0-9]+)?(,[a-z0-9]+)?\)\./g
    let m = ''
    let n = ''
    let i = 0
    req.body.input = req.body.input.replace(/ /g, '');

    // Shothand methods
    do {
        m = re.exec(req.body.input);
        if (m) {
            n = ''
            for(i=Number(m[3]);i<=Number(m[5]);i++) {
              n += ` ${m[1]}${m[2]}${i}${(m[6]?m[6]:'')}${m[7]}`
              // console.log(n);
            }
            req.body.input = req.body.input.replace(m[0],n)
        }
    } while (m);

    req.body.input += fs.readFileSync('./asp/intersection_rules.asp')

    fs.writeFile('temp.asp', req.body.input, (err) => {
        if (err) throw err;

        const ls = spawn('clingo', ['temp.asp', '--mode=gringo', '--text']);
        response = ''
        ls.stdout.on('data', (data) => {
          response += data
        });

        ls.stderr.on('data', (data) => {
          //response = '***'
        });

        ls.on('close', (code) => {
          // Construct object from asp
          m = ''
          let input = response
          do {
              m = re2.exec(input);
              if (m) {
                if(!atoms[m[1]]) atoms[m[1]] = {}
                atoms[m[1]][m[0]] = {
                  name: m[1],
                  args: [m[2], (m[3]?m[3].replace(',',''):m[3]), (m[4]?m[4].replace(',',''):m[4])]
                }
              }
          } while (m);

          res.status(codes.OK).send({data: response, atoms: atoms})
        });
    });
  });

  return router;
}

module.exports = routeFunction;
