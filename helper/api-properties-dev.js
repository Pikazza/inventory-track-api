module.exports = {
	db:{
		//url:'mongodb://ccuser:ccmbf2018@localhost:27017/careersconnect',
		url:'mongodb://db_user:db_pwd@db_host:db_port/db_name',
	},
	basicAuth:{
		username:'MbF@cc-coNNect12',
        password:'sAwuGuDWKW3BWt8W'
    },
    jwtSecret:{
        key:'#b&yhZxmiPhZzEJgGUFj',
    },
	logger:{
		path:'/usr/local/opt/cc-log/'
	},
	swaggerUrl:{
		host: 'swagger_url'
		//host: '192.168.3.82:8080'
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
		uploadPath:'/usr/local/opt/cc-images/'
	},
	//sendGridApiKey : "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"
	sendGridApiKey : 'sendgrid_api_key'
}
