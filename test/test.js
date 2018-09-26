'use strict';

const chai = require('chai'),
  should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

let server = require('../server.js');

let assert = require('assert');
let http = require('http');

describe('server', function() {
  before(function() {
    server.listen(8000);
  });

  after(function() {
    server.close();
  });
});

describe('/', function() {
  it('should return 200', function(done) {
    http.get('http://localhost:8080', function(res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should be index.html', function(done) {
    http.get('http://localhost:8080', function(res) {
      var data = '';

      res.on('data', function(chunk) {
        data += chunk;
      });

      res.on('end', function() {
        res.should.be.html;
        done();
      });
    });
  });
});
