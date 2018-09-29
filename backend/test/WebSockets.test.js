const socketClusterClient = require('socketcluster-client');
const should = require('chai').should();


describe('Web socket', () => {
  let socket;

  beforeEach((done) => {
    socket = socketClusterClient.create({
      hostname: 'localhost',
      port: 3001,
      autoReconnect: true,
    });

    socket.on('connect', () => {
      console.log('[Web sockets] client connected');
      done();
    });
    socket.on('disconnect', () => {
      console.log('[Web sockets] client disconnected...');
    });
  });

  afterEach((done) => {
    socket.destroy();
    done();
  });

  it('should return the net salary when asked', (done) => {
    socket.on('NET_SALARY', (data) => {
      data.net_salary.should.equal(29498.5);
      done();
    });

    socket.emit('CALCULATE_NET_SALARY', {
      gross_salary: 40000,
    });
  });

  it('should return the yearly savings when asked', (done) => {
    socket.on('YEARLY_SAVINGS', (data) => {
      data.yearly_savings.should.equal(888);
      done();
    });

    socket.emit('CALCULATE_YEARLY_SAVINGS', {
      gross_salary: 40000,
      monthly_spending: 200,
    });
  });
});
