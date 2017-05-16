
var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 25321;

var server = http.createServer(function(req,res){
    var temp = url.parse(req.url,true)
        path = temp.pathname,
        query = temp.query,
        method = req.method

    if(path === '/'){
      var string = fs.readFileSync('./index.html')  
      response.setHeader('Content-Type', 'text/html;charset=utf-8')  
      response.end(string)   
    }else if(path === '/style.css'){   
      var string = fs.readFileSync('./style.css')
      response.setHeader('Content-Type', 'text/css')
      response.end(string)
    }else if(path === '/main.js'){  
      var string = fs.readFileSync('./main.js')
      response.setHeader('Content-Type', 'application/javascript')
      response.end(string)
    }else if(path === '/page1.json'){
      var string = fs.readFileSync('./page1.json')
      response.setHeader('Content-Type', 'application/json')
      response.end(string)
    }else if(path === '/page2.json'){
      var string = fs.readFileSync('./page2.json')
      response.setHeader('Content-Type', 'application/json')
      response.end(string)
    }else{  
      response.statusCode = 404
      response.setHeader('Content-Type', 'text/html;charset=utf-8') 
      response.end('找不到对应的路径，你需要修改 index.js')
    }

    console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功, 请打开 http://localhost:' + port)