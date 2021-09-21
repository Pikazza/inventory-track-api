'use strict'

const ErrorCodes = require('../helper/error-constants');
const logger = require('../middleware/log');
const NotFoundError = require('../middleware/custom-error').NotFoundError,
    AlreadyExistError = require('../middleware/custom-error').AlreadyExistError,
    UnauthorizedAccessError = require('../middleware/custom-error').UnauthorizedAccessError,
    BadRequestError = require('../middleware/custom-error').BadRequestError,
    AccessDeniedError = require('../middleware/custom-error').AccessDeniedError,
    ValidationError = require('../middleware/custom-error').ValidationError,
    DuplicateFormValueError = require('../middleware/custom-error').DuplicateFormValueError;

module.exports = (router) => {
    logger.info("exception mapper configured....")
    router.use(function(err, req, res, next) {
        logger.error("Error middleware  "+JSON.stringify(err));
        let errorRes;
        if (err instanceof AlreadyExistError) {
            errorRes = {
                "code":ErrorCodes.ALREADY_EXIST_ERROR,
                "name":err.name,
                "message":err.message
            }
            res.status(400).json(errorRes);
        }
        else if(err instanceof UnauthorizedAccessError){
            errorRes = {
                "code":ErrorCodes.UNAUTHORIZED_ACCESS_ERROR,    
                "name":err.name,
                "message":err.message
            }
            res.status(401).json(errorRes);
        }
        else if(err instanceof BadRequestError){
            errorRes = {
                "code":ErrorCodes.BAD_REQUEST_ERROR,
                "name":err.name,
                "message":err.message
            }
            res.status(400).json(errorRes);
        }
        else if(err instanceof NotFoundError){
            errorRes = {
                "code":ErrorCodes.NOT_FOUND_ERROR,
                "name":err.name,
                "message":err.message
            }
            res.status(404).json(errorRes);
        }
        else if(err instanceof AccessDeniedError){
            errorRes = {
                "code":ErrorCodes.ACCESS_DENIED_ERRORCODE,
                "name":err.name,
                "message":err.message
            }
            res.status(401).json(errorRes);
        }
        else if(err instanceof ValidationError){
            errorRes = {
                "code":ErrorCodes.VALIDATION_ERRORCODE,
                "name":err.name,
                "message":err.message
            }
            res.status(400).json(errorRes);
        }
        else if(err instanceof DuplicateFormValueError){
            errorRes = {
                "code":ErrorCodes.DUPLICATE_FORM_VALUE_ERRORCODE,
                "name":err.name,
                "message":err.message,
                "errors":err.errors
            }
            res.status(400).json(errorRes);
        }
        else {
            errorRes = {
                "code":ErrorCodes.UNKNOWN_ERROR,
                "name":err.name,
                "message":err.message
            }
            res.status(400).json(errorRes);
        }

    });
}
