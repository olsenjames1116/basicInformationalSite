const http = require('http');
const fs = require('fs/promises');

const host = 'localhost';
const port = 8080;

const requestListener = async (request, response) => {
	try {
		const data = await fs.readFile(__dirname + '/index.html');
		response.setHeader('Content-Type', 'text/html');
		response.writeHead(200);
		response.end(data);
	} catch (error) {
		response.writeHead(404, { 'Content-Type': 'text/html' });
		fs.readFile(__dirname + '/404.html');
		response.end();
	}
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
