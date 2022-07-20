// import fs from "fs";     >= ES6

const fs = require('fs');
const http = require('http');
const url = require('url');

// modules folder dotor bga replaceTemplate.js file-aas funkts import-low.
const replaceTemplate = require('./modules/replaceTemplate');

//////////////////////////FILES//////////////////////////////
//==============Blocking, synchronous way=======================
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about: ${textIn}.\nCreated on${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File was written');

//========== Non-Blocking, Asynchronous way======================
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('error');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//       console.log(data3);
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//         console.log('your file has been written!');
//       });
//     });
//   });
// });
// console.log('will read file');

//////////////////////////SERVER//////////////////////////////

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  //127.0.0.1:8000 url hayag dr...

  // 1. Url {query: {id:0}, pathname: '/product'} gesen object irne.
  // 2. Destructuring hged query, pathName 2-iig hadgalj awna.
  const { query, pathname } = url.parse(req.url, true);
  const pathName = pathname;

  //127.0.0.1:8000/overview gej chrome dr bichwel terminal overview geh met text garna.
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    // 1.data.json file dotroo array[]-aar gvigeed "html"-vvd irne.
    const cardHTML = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');

    //2. template-overview.html dotorh {%product_cards}-iig cardHTML-eeree replace hiine.
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHTML);

    //3. output-ee browser-luu yawuulsnaar BARAANUUD haragdana.
    res.end(output);
  }

  //=============Product page=============
  else if (pathName === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    //1. data.json [] dotorh object-iig
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }

  //===============API====================
  else if (pathName === '/api') {
    // data-gaa browser luu yawuulahad JSON baidlaar response irne.
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }

  //127.0.0.1:8000/asdwadsda gej chrome dr bichwel browser dr "Page  not found' gesen bichig garch irne irne.
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello Ganzo',
    });
    res.end('<h1>page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1');
console.log('listening to requests on port 8000');
