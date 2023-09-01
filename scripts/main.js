// var reader = new FileReader();
// require(['fs'], function(fs){
    
    // });
// const fs = require('fs');
// define(['require','fs'], function (require) {
// });
// require(['fs'],function(fs){});
var LINK_SRC = "https://github.com/txff99/txff99.github.io/link/link.txt";
var DES_SRC = "https://github.com/txff99/txff99.github.io/link/description.txt"
const links = [];
const description = [];

fetch(LINK_SRC)
  .then((res) => res.text())
  .then((text) => {
    console.log(text);
    // links.push(text)
   })
  .catch((e) => console.error(e));
