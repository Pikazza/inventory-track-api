const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../middleware/db');


const Customer = sequelize.define('customer', {
    // Model attributes are defined here
    CustomerId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    CustomerName: {
        type: DataTypes.STRING
    },
    CustomerMobile: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Address: {
      type: DataTypes.STRING
    },
    Pincode: {
      type: DataTypes.STRING
    },
    sales_area: {
        type: DataTypes.STRING
    },
    Tinno: {
        type: DataTypes.STRING
    },
    special_discount: {
      type: DataTypes.INTEGER
    },
    Membership_Id: {
      type: DataTypes.STRING
    },
    Accountid: {
      type: DataTypes.INTEGER
    },
    seller_id: {
      type: DataTypes.INTEGER
    },
    UserName: {
      type: DataTypes.STRING
    },
    Password: {
      type: DataTypes.STRING
    },
    Status: {
      type: DataTypes.STRING
    },
    Role: {
      type: DataTypes.VIRTUAL
    }
  }, {
    timestamps: false
  });

  console.log(Customer === sequelize.models.Customer);


  Customer.findAllCustomerProducts =  async function (customerId) {
    const customerProducts = await sequelize.query("SELECT cb.CustomerId, p.productid, b.stockid, p.description, p.category, cb.Billno, cb.Billdate, b.billprice, b.qty, b.Netamount, cb.AmountTendered, cb.seller_id, u.UserName AS seller, cb.paymentdate,p.`retailprice`, p.`MRP`, p.`BasicCost`, p.`image_path`, p.`wholesaleprice` FROM customerbill AS cb LEFT JOIN bill AS b ON cb.Billno = b.billno LEFT JOIN products AS p ON b.stockid = p.Autoid LEFT JOIN user AS u ON cb.seller_id = u.seller_id WHERE CustomerId = " +customerId,
     { type: QueryTypes.SELECT });
    return customerProducts;
  }


  module.exports = Customer;