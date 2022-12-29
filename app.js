var api_key = '8d7bb23cda11a220d9fd9946623c5cdc-c2efc90c-e4d317e6';
var domain = 'sandbox87c93d96b2a24e41a3225c440f97c6a8.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <vignesh@mindwaveventures.com>',
  to: 'vignesh@mindwaveventures.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
    if(error){
        console.log(error)
    }
  console.log(body);
});