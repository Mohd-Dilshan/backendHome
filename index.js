// const url =require ('url');

// const myUrl = 'http://localhost:3000?name=John&age=30';  //?name=John&age=30 -> query parameters ,its route -> /

// const parseUrl =url.parse(myUrl, true);
// console.log(parseUrl);

// console.log(parseUrl.host) //localhost:3000
// console.log(parseUrl.query) //query 





//lab9

const http = require('http');
const url = require('url');  

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname;

    if (pathName === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page</h1>');
    }
});

// ✅ start the server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});