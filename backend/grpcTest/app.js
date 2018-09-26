const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

class IRPFHandler {
  calculateNetSalary(call, callback) {
    const grossSalary = call.request.grossSalary;
    return callback(null, {
      netSalary: grossSalary * 0.1
    })
  }

  calculateYearlySavings(call, callback) {
    const grossSalary = call.request.grossSalary;
    const monthlySpending = call.request.monthlySpending;
    return callback(null, {
      yearlySavings: grossSalary + monthlySpending
    })
  }
}

const PATH = '0.0.0.0:3001';

const createServer = function (bindPath, handler) {
  protoLoader.load('./irpf.proto', { includeDirs: ['./'] })
    .then((packageDefinition) => {
      const protoPackage = grpc.loadPackageDefinition(packageDefinition);
      const service = protoPackage.irpf_package.IRPF.service;
      const server = new grpc.Server();
      server.addService(service, handler);
      server.bind(bindPath, grpc.ServerCredentials.createInsecure());
      server.start();
      console.log('Server running on 8080');
    });
};

createServer(PATH, new IRPFHandler);