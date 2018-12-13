const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

describe('/---Homepage Route Test---/', () => {
  it('Has status 200', (done) => {
    chai.request('http://localhost:8080')
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
  }).timeout(5000);
});
describe('/---SVG Route Test---/', () => {
  it('Has status 200', (done) => {
    chai.request('http://localhost:8080')
        .get('/svg')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
  }).timeout(5000);
});
