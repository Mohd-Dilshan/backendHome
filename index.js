// const url =require ('url');

// const myUrl = 'http://localhost:3000?name=John&age=30';  //?name=John&age=30 -> query parameters ,its route -> /

// const parseUrl =url.parse(myUrl, true);
// console.log(parseUrl);

// console.log(parseUrl.host) //localhost:3000
// console.log(parseUrl.query) //query 





//lab9

const http = require('http');
const url = require('url');  

const fs = require('fs')

const path = require('path')

const filepath=path.join(__dirname + '/data.txt');

const data = {
    name : "Tushar Kumar",
    aka : "The CEO",
    age : 79,
    college : "Invertis University,UP"
}


if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify([], null, 2));
}

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathName = parseUrl.pathname;
    const query = parseUrl.query;


    if (pathName === '/') {
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end();
    }
    else if (pathName === '/addName') {
        const { name } = query;

        res.write(`<H1>Hello ${name}</H1>`);
        res.end();
    }
    else if (pathName === '/data') {
        const fileData = fs.readFileSync(filepath, 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(fileData);
        res.end();
    }else {
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }
});

// start the server
server.listen(3000, () => {
    console.log('http://localhost:3000');
});

