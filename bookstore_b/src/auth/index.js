const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

module.exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://bk-tmp.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'PVafIu9Q5QN65DiPByAFvCCJryY7n432',
  issuer: `https://bk-tmp.auth0.com/`,
  algorithms: ['RS256']
});