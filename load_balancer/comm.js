/* eslint import/no-dynamic-require: 0 */
const { Logger } = require('../util/logger.js');
const { check } = require('../util/environmentCheck.js');
check('LBCONFIG');

const lbConfig = require(process.env.LBCONFIG);

const loggerConfig = lbConfig.load_balancer;
loggerConfig.cmd = 'log';

const logger = new Logger(loggerConfig);

class HTTPComm {
  foobar() {
    logger.debug(`hello world`);
  }
}


module.exports = {
  HTTPComm,
};
