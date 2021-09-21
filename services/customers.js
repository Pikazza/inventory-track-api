'use strict'

const logger = require('../middleware/log');
const utils = require('../helper/api-utils');
const Customer = require('../models/customers');
const Admin = require('../models/admins');
const { QueryTypes } = require('sequelize');

const BadRequestError = require('../middleware/custom-error').BadRequestError;

module.exports.getAll = async() => {
    logger.info("CustomerService:- Getting All initiated... ");
    let result = await Customer.findAll();
    return result;
}


module.exports.createCustomer = async(request) => {
    logger.info("CustomerService:- Creating new customer initiated... ");
    logger.info("Requsts details are  "+ JSON.stringify(request));
    const customer = await Customer.create(request);
    return customer;
}

module.exports.getCustomerById = async(customerId,next) => {
    logger.info("CustomerService:- Creating new customer initiated... ");
    logger.info("customerId to be accessed is  "+ customerId);
    const customer = await Customer.findOne({ where: { CustomerId: customerId } });
    if(!customer){
        return next(new BadRequestError('Given Member does not exist'));
    }
    return customer;
}

module.exports.updateCustomer = async(customerId, request,next) => {
    logger.info("CustomerCustomerServiceController:- Creating new customer initiated... ");
    logger.info("customerId to be accessed is  "+ customerId);
    const customer = await Customer.findOne({ where: { CustomerId: customerId } });
    const username = await Customer.findOne({ where: { UserName: request.UserName } });
    if(!customer){
        return next(new BadRequestError('Given Member does not exist'));
    }
    if( (username) && (customer.CustomerId !== username.CustomerId ) ){
        return next(new BadRequestError('Given Username is already exist'));
    }

    customer.CustomerName = request.CustomerName;
    customer.CustomerMobile = request.CustomerMobile;
    customer.Email = request.Email;
    customer.Address = request.Address;
    customer.Pincode = request.Pincode;
    customer.sales_area = request.sales_area;
    customer.Tinno = request.Tinno;
    customer.special_discount = request.special_discount;
    customer.Membership_Id = request.Membership_Id;
    customer.Accountid = request.Accountid;
    customer.seller_id = request.seller_id;
    if(request.UserName){
        customer.UserName = request.UserName;
    }
    if(request.Password){
        customer.Password = request.Password;
    }
    customer.Status = request.Status;
    const customer1 = customer.save();
    return customer1;
    
}


module.exports.signIn = async(request) => {
    logger.info("CustomerService:- Creating new customer initiated... ");
    logger.info("Requsts details are  "+ JSON.stringify(request));
    let username = request.UserName;
    let password = request.Password; 

    let admin = await Admin.findOne({ where: { UserName: username , Password: password } });
    if(admin){
        logger.info("admin logged in details"+ JSON.stringify(admin));
        // let admin = await Admin.findOne({ where: { UserName: username , Password: password } });
        admin.Password = "";
        // admin.CustomerName = "Admin";
        // admin.Username = request.Username;
        // admin["Status"] = "Active";
        let other = {
            CustomerName: "Admin",
            Status: "Active"
        }
        admin = {...admin.dataValues, ...other};
        logger.info("admin logged in details"+ JSON.stringify(admin));
        return admin;
    }else{
        let customer = await Customer.findOne({ where: { UserName: username , Password: password } });
        if(customer){
            customer.Role = "customer";
            customer.Password = "";
        }
        return customer;
    }
    
}

module.exports.getCustomerProducts = async(customerId) => {
    logger.info("CustomerService:- Getting products... ");
    logger.info("customerId to be accessed is  "+ customerId);
    // const customer = await Customer.findOne({ where: { CustomerId: customerId } });
    // const { QueryTypes } = require('sequelize');
    const custoemrProducts = await Customer.findAllCustomerProducts(customerId);
    return custoemrProducts;
}