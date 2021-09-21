module.exports = {
	db:{
		// url:'mongodb://pikazza:pikazza123@localhost:27017/careersconnect',
		url:'mongodb://ccuser:cc2018mbf@13.251.71.26:27018/careersconnect',
		// url:'mongodb://db_user:db_pwd@db_host:db_port/db_name',
	},
	basicAuth:{
		username:'MbF@cc-coNNect12',
        password:'sAwuGuDWKW3BWt8W'
    },
    jwtSecret:{
        key:'#b&yhZxmiPhZzEJgGUFj',
    },
	logger:{
		path:'/tmp/cc-log/'
	},
	swaggerUrl:{
		// host: 'swagger_url'
		host: 'localhost:8080'
	},
	email:{
		emailHost:'email_host',
        emailPort :'email_port',
        // username:'email_user',
        // password:'email_pwd'	
        username : "support@careersconnect.com"
	},
	verificationLink:{
		host:'email_link_host'
	},
	domainUrl:{
      hostName :'domain_suffix'
	},
	imageRefPath:{
		uploadPath:'/tmp/cc-images/'
	},
	sendGridApiKey : "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"
	// sendGridApiKey : 'sendgrid_api_key'
}
