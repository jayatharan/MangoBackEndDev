const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
