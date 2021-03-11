const { response } = require("express")

const jwt = require('jsonwebtoken');

module.exports.generateJwtToken = async(userData) => {
  return new Promise((resolve,reject) => {
    jwt.sign({user: userData},'jwtkey',(err,token) => {
      if (err) {
        reject(false);
      } else {
        resolve(token);
      }
    })
  })
}
module.exports.verifyJwt = async(req,res,next) => {
    const authorizationHeader = req.headers.authorization;
    if(authorizationHeader){
        let values = req.headers.authorization.split(' ');
        await this.verifyJwtToken(authorizationHeader).then((userData) => {
            req.tokenData = userData
            next()
        }).catch(error => {
            return res.send('your seesion expired')
        })
    }else{
      let urlParams = req.originalUrl.split('/')[1];
      if ((['users', 'admin'].includes(urlParams))) {
        return res.send('send authentication token')
      } else {
        next();
      }
    }
}
module.exports.verifyJwtToken = async (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, 'jwtkey', (err, decoded) => {
        if (err) {
          reject();
        }
        resolve(decoded);
      });
    });
  };