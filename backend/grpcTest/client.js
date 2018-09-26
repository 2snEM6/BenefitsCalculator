const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const bindPath = '0.0.0.0:3001';

protoLoader.load('./irpf.proto', { includeDirs: ['./'] })
  .then((packageDefinition) => {
    const protoPackage = grpc.loadPackageDefinition(packageDefinition);
    const Client = protoPackage.irpf_package.IRPF;
    const client = new Client(bindPath, grpc.credentials.createInsecure());

    setInterval(() => {
      client.calculateNetSalary({
        grossSalary: 40000*Math.random(),
        monthlySpending: Math.random()*100
      }, (err, res) => {
        if (err) {
          return console.log(err);
        }
        console.log('net salary: ' + res.netSalary);
      });
    }, 10);
  });