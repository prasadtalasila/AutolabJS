/* eslint no-underscore-dangle: [2, { "allow": ["__get__"] }] */
/* eslint import/no-dynamic-require: 0 */
const chai = require('chai');
const { Comm } = require('../../comm.js');
const dirtyChai = require('dirty-chai');
const { check } = require('../../../util/environmentCheck.js');

check('LBCONFIG');
const nodesData = require(`../../${process.env.LBCONFIG}`);
chai.should();
chai.use(dirtyChai);

describe('Unit tests for HTTP Comm', () => {

  it('say hello', () => {
    str = 'hello'
    str.should.equal('hello')
  });

});
