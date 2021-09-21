'use strict'
var crypto = require('crypto');
const fs = require('fs');
const path=require('path');
const props = require('../helper/api-properties');
const logger =require('../middleware/log');
var salt = "sssecreatekey4encryptpassword".toString('base64');
const _ = require('lodash');

module.exports.generatePass =()=> {
    var keys = "1234567890";
    let i;
    let password="";
    for(i = 0; i < 6; i++) {
        password += keys.charAt(Math.floor(Math.random()*keys.length))
    }
    logger.info("ApiUtils:- new OTP generated...")
    return password;
}

module.exports.encryptPassword = (password) => {
    // logger.info("ApiUtils:- Plain password is "+password)
    var hmac = crypto.createHmac('sha256', salt);
    return hmac.update(password).digest('hex');
}

module.exports.comparePassword = (newPassword, oldPassword) => {
    var passHash = exports.encryptPassword(newPassword);
    // logger.info("ApiUtils:- Old password is "+oldPassword + " New password is "+newPassword + " encryptPassword is "+passHash)
    return oldPassword == passHash;
}


function checkUploadPath(uploadPath) {
    logger.info("ApiUtils:- checkUploadPath >>>>>>>>> "+uploadPath)
    if (!fs.existsSync(uploadPath)) {
        logger.info("ApiUtils:- create folder >>>> "+uploadPath)
        /*fs.chmod(uploadPath, '0777', (error) => {
            console.log('Changed file permissions');
        });*/
        fs.mkdirSync(uploadPath);
        fs.chmodSync(uploadPath, '0777');

    }
    return true;
}

module.exports.getymd = () => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    return "" + year + leadingZero(month) + leadingZero(day);
}

function leadingZero(value) {
  if (value < 10) {
    return "0" + value.toString();
  }
  return value.toString();
}

module.exports.padZeroes = async(number, length) => {
    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return await my_string;
}

module.exports. base64_encode = (file) => {
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64');
}

module.exports.isRoleRelatedToStudent = (role) => {
  return (role === 'STUDENT' || role === 'ALUMNI' ) ? true:false;
}

module.exports.isRoleRelatedToEmplyer = (role) => {
  return (role === 'EMPLOYER_ADMIN' || role === 'EMPLOYER_STAFF' ) ? true:false;
}

module.exports.isRoleRelatedToSchool = (role) => {
  return (role === 'SCHOOL_ADMIN' || role === 'SCHOOL_STAFF'  ) ? true:false;
}

module.exports.isRoleInstituteAdmin = (role) => {
  return (role === 'INSTITUTE_ADMIN' ) ? true:false;
}

module.exports.isRoleCCAdmin = (role) => {
  return (role === 'CC_ADMIN' ) ? true:false;
} 

module.exports.isRoleCCAdminOrInstituteOrSchoolAdmin = (role) => {
    return (role === 'CC_ADMIN' || role === 'INSTITUTE_ADMIN' || role === 'SCHOOL_ADMIN') ? true:false;
  } 

module.exports.deleteFile = (path) => {
    try {
      fs.unlinkSync(props.imageRefPath.uploadPath+path);
      logger.info("ApiUtils:- Image deleted successfully");
    } catch(err) {
      logger.info("ApiUtils:- there is an error occured while deleting the document");
      console.error(err);
    }
    return true;
}

module.exports.getUserIP =  (req) =>{
  console.log("IP of x-forwarded-for :- "+ req.headers['x-forwarded-for']);
  console.log("IP of req.connection.remoteAddress :- "+ req.connection.remoteAddress );
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if(ip.indexOf("::ffff:") > -1 ){
    ip = ip.replace("::ffff:", "");
  }
  return ip;
}



module.exports.filterMemberByMarketting = (members) => {
  return _.filter(members, function(m) { return m.marketing; });
}
