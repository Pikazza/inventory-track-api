'use strict'

const logger = require('../middleware/log');
const utils = require('../helper/api-utils');
const customerService = require('../services/customers');


module.exports.getAll = async(req,res,next) => {
    logger.info("CustomerController:- Getting All initiated... ");
    let result = await customerService.getAll();
    res.status(200).json(result);
}

module.exports.createCustomer = async(req,res,next) => {
    logger.info("CustomerController:- Getting All initiated... ");
    let request = req.body;
    let result = await customerService.createCustomer(request);
    res.status(200).json(result);
}


module.exports.getCustomerById = async(req,res,next) => {
    logger.info("CustomerController:- Getting All initiated... ");
    let customerId = req.params.customerId;
    let result = await customerService.getCustomerById(customerId, next);
    res.status(200).json(result);
}


module.exports.updateCustomer = async(req,res,next) => {
    logger.info("CustomerController:- Getting All initiated... ");
    let customerId = req.params.customerId;
    let request = req.body;
    let result = await customerService.updateCustomer(customerId, request, next);
    res.status(200).json(result);
}

module.exports.signIn = async(req,res,next) => {
    logger.info("CustomerController:- SignIn Initiated ... ");
    let request = req.body;
    let result = await customerService.signIn(request);
    console.log(">>>>>>>>>>>>>>"+JSON.stringify(result));
    if(result){
        res.status(200).json(result);
    }else{
        res.status(400).json({
            "code":"100",
            "message":"Username / Password not matched"
        });
    }
    
}

module.exports.getCustomerProducts = async(req,res,next) => {
    logger.info("CustomerController:- Getting the products ... ");
    let customerId = req.params.customerId;
    let result = await customerService.getCustomerProducts(customerId);
    res.status(200).json(result);
}

