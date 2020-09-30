const http = require('http');

const requestListener = (req, res) => {
  // req => readable stream
  console.dir(req, {depth: 0}) // prints the incoming response
  
  // res => writable stream
  console.dir(res, {depth: 0}) // prints the server response
  
  res.write('Hello World\n');
  res.end()
}

const server = http.createServer(requestListener);
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
