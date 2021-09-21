# inventory-track-api


web-app

1. to create new application from angular:
    - ng new inventory-track-web-app
2. create service components which used to have communication with RESTful API
    - ng g s services/inventory-api
3. create controller components
    - ng g c components/profile
    - ng g c components/customer-list
    - ng g c components/customer-add
    - ng g c components/customer-edit
    - ng g c components/product-list
4. create model class
    - ng g class models/customer --type=model
    - ng g class models/product --type=model