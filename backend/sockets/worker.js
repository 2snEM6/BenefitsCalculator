const SCWorker = require('socketcluster/scworker');
const serveStatic = require('serve-static');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const healthChecker = require('sc-framework-health-check');

class Worker extends SCWorker {
  run() {
    console.log('   >> Worker PID:', process.pid);
    const environment = this.options.environment;

    const app = express();

    const httpServer = this.httpServer;
    const scServer = this.scServer;

    if (environment === 'dev') {
      // Log every HTTP request. See https://github.com/expressjs/morgan for other
      // available formats.
      app.use(morgan('dev'));
    }
    app.use(serveStatic(path.resolve(__dirname, 'public')));

    // Add GET /health-check express route
    healthChecker.attach(this, app);

    httpServer.on('request', app);

    /*
      In here we handle our incoming realtime connections and listen for events.
    */
    scServer.on('connection', function (socket) {

      socket.on('getNetSalary', (data) => {
        scServer.exchange.publish('netSalary', 4500);
      });
    });
  }
}

new Worker();
