const http = require('http');
const fs = require('fs/promises');

const host = 'localhost';
const port = 8080;

const requestListener = async (request, response) => {
	try {
		response.setHeader('Content-Type', 'text/html');
		switch (request.url) {
			case '/about':
				const data = await fs.readFile(__dirname + '/about.html');
				response.writeHead(200);
				response.end(data);
				break;
		}
		// const data = await fs.readFile(__dirname + '/index.html');
		// response.writeHead(200);
		// response.end(data);
	} catch (error) {
		response.writeHead(404);
		const data = await fs.readFile(__dirname + '/404.html');
		response.end(data);
	}
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
