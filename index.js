
  
   
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'w1Rv0AJUa57zCC8VJLv5XdKmsc6mhCiDmD18oU49JfOvBZm8od',
  consumer_secret: 'EpOgRe8ND72o5dwTFuaErysVUdoDW1dcAPxTfhDmrcl9InBU9J',
  token: '47nHpndk7zOvqgJx9MZFoNjwgQEWG0KCGEEHsFYN9pkRmYLHIA',
  token_secret: 'rbNv6w7JavkSDWxqGd2tEpLpgLmRcmasI5v8siQ7FwTGlDlFkh'
});

var blogName='sujithkrmaradu.tumblr.com';
var options =
      {
        "type": "text",
        "title"  : "blogtitle",
        "body" : "hello friends this is my 13thpost"
        
        
      };
////client.createTextPost(blogName, options);

//client.createTextPost(blogName, options, function(err =null, resp =null, response =null){console.log(response )});
//var apiPath='http://api.tumblr.com/v2/blog/sujithkrmaradu.tumblr.com/posts/queue';
//var apiPath='http://api.tumblr.com/v2/blog/sujithkrmaradu.tumblr.com/post';
var apiPath='/blog/sujithkrmaradu.tumblr.com/post';
client.postRequest(apiPath, options);

//callback(errnullable, resp, response){
 //console.log(resp);
//});

client.userInfo(function (err, data) {
    data.user.blogs.forEach(function(blog) {
    console.log(blog.name);
  });
});





const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
