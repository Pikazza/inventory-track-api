'use strict'
const logger = require('../middleware/log');

function CustomError(message, code) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.code = code;
};

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

function AlreadyExistError(error) {
    this.name = "AlreadyExistError";
    this.message = error;
}

function DuplicateFormValueError(error, array) {
    this.name = "DuplicateFormValueError";
    this.message = error;
    this.errors = array;
}

function BadRequestError(error) {
    this.name = "BadRequestError";
    this.message = error;
}

function NotFoundError(error) {
    this.name = "NotFoundError";
    this.message = error;
}

function UnauthorizedAccessError(error) {
    this.name = "UnauthorizedAccessError";
    if(error instanceof Object) {
        this.message = error.message;
    } else {
        this.message = error;
    }
    this.inner = error;
}


function AccessDeniedError(error) {
    this.name = "AccessDeniedError";
    this.message = error;
    this.inner = error;
}

function ValidationError(error,mongooseErr = null) {
    let errorMessage;
    if(mongooseErr) {
        //mongooseErr
        errorMessage = error.message;
    } else {
        //joiErr
        errorMessage = error.details.map(d => d.message);
    }
    this.name = "ValidationError";
    this.message = errorMessage;
}


module.exports = {
	CustomError,
    AlreadyExistError,
    BadRequestError,
    NotFoundError,
    UnauthorizedAccessError,
    AccessDeniedError,
    ValidationError,
    DuplicateFormValueError
}
