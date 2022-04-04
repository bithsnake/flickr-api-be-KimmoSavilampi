const server = require('../index').server;
/**Close server handler */
const CloseServer = () => {
    server.close();
};


module.exports = CloseServer;