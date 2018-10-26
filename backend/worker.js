const SCWorker = require('socketcluster/scworker');
const morgan = require('morgan');
const express = require('express');
const healthChecker = require('sc-framework-health-check');
const SalaryTools = require('./SalaryAndBenefitsTools');

class Worker extends SCWorker {
  run() {
    console.log('   >> Worker PID:', process.pid);
    const { environment } = this.options;

    const app = express();

    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });

    const { httpServer, scServer } = this;

    if (environment === 'dev') {
      // Log every HTTP request. See https://github.com/expressjs/morgan for other
      // available formats.
      app.use(morgan('dev'));
    }

    // Add GET /health-check express route
    healthChecker.attach(this, app);

    httpServer.on('request', app);

    /*
      In here we handle our incoming realtime connections and listen for events.
    */
    scServer.on('connection', (socket) => {
      console.log('A client has been connected');

      socket.on('CALCULATE_NET_SALARY', (data) => {
        console.log('CALCULATE_NET_SALARY');
        socket.emit('NET_SALARY', {
          net_salary: SalaryTools.computeNetSalary(
            data.gross_salary, SalaryTools.IRPF.ofYear(2017),
          )
          ,
        });
      });

      socket.on('CALCULATE_YEARLY_SAVINGS', (data) => {
        const yearlySavings = SalaryTools.computeYearlySavings(
          data.gross_salary, data.monthly_spending,
          SalaryTools.IRPF.ofYear(2017),
        );
        socket.emit('YEARLY_SAVINGS', {
          yearly_savings: yearlySavings,
          gross_salary: data.gross_salary,
          monthly_spending: data.monthly_spending
        });
      });
    });
  }
}

new Worker();
