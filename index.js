require('events').EventEmitter.defaultMaxListeners = 0; 
const prompt = require('prompt-sync')();
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');


const token = fs.readFileSync('token.txt', 'utf-8').replace(/\r/gi, '').split('\n').filter(Boolean);
const postid = prompt('Id Post: ');


for (var i = 0; i < token.length; i++) {

  main()

}


function main() {
  let tokens = token[Math.floor(Math.random() * token.length)];
  var data = new FormData();

  data.append('access_token', tokens);

  var config = {
    method: 'post',
    url: 'https://graph.facebook.com/'+postid+'/likes',
    headers: { 
      ...data.getHeaders()
    },
    data : data
  }

  axios(config)
}