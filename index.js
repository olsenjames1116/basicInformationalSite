const express = require('express');
const app = express();
const fs = require('fs/promises');

const host = 'localhost';
const port = 8080;

const requestListener = async (request, response) => {
	response.setHeader('Content-Type', 'text/html');
	switch (request.url) {
		case '/':
			const index = await fs.readFile(__dirname + '/index.html');
			response.writeHead(200);
			response.end(index);
			break;
		case '/about':
			const about = await fs.readFile(__dirname + '/about.html');
			response.writeHead(200);
			response.end(about);
			break;
		case '/contact-me':
			const contactMe = await fs.readFile(__dirname + '/contact-me.html');
			response.writeHead(200);
			response.end(contactMe);
			break;
		default:
			const error = await fs.readFile(__dirname + '/404.html');
			response.writeHead(404);
			response.end(error);
			break;
	}
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
