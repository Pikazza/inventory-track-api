module.exports = {
	db:{
		// url:'mongodb://ccuser:ccmbf2018@localhost:27017/careersconnect',
		url:'mysql://root:root@localhost:3306/billing-store',
		host:'localhost',
		port: '3306',
		user:'root',
		password:'root',
		database:'billing-store'
	},
	basicAuth:{
		username:'MbF@cc-coNNect12',
        password:'sAwuGuDWKW3BWt8W'
    },
    jwtSecret:{
        key:'#b&yhZxmiPhZzEJgGUFj',
    },
	logger:{
		// path:'/usr/local/opt/cc-log/'
		path:'/tmp/inventory-log/'
	},
	swaggerUrl:{
		host: 'swagger_url'
		// host: '192.168.3.200:8080'
	},
	email:{
		emailHost:'email_host',
        emailPort :'email_port',
        username:'email_user',
        password:'email_pwd'
        //username : "support@careersconnect.com"
	},
	verificationLink:{
		host:'email_link_host'
	},
	domainUrl:{
      hostName :'domain_suffix'
	},
	imageRefPath:{
		// uploadPath:'/usr/local/opt/cc-images/'
		uploadPath:'/tmp/inventory-images/'
	},
	//sendGridApiKey : "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"
	sendGridApiKey : 'sendgrid_api_key'
}
