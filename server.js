const http = require('http');

//To get the configuration data like Port Number.
const config = require('./config');

const server = http.createServer(app);

//inform in console the server has started on port : number
server.listen(config.port,  () => console.log(`Server started on port : ${config.port}`)); 