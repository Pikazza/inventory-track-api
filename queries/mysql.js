//to add extra fields for the customers 

ALTER TABLE `billing-store`.`customer` 
ADD COLUMN `Username` VARCHAR(50) NULL AFTER `seller_id`, ADD COLUMN `Password` VARCHAR(50) NULL AFTER `Username`, ADD COLUMN `Status` VARCHAR(50) NULL AFTER `Password`; 

//  