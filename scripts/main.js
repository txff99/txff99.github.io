// var reader = new FileReader();
// require(['fs'], function(fs){
    
    // });
// const fs = require('fs');
// def`ine(['require','fs'], function (require) {
// });
// require(['fs'],function(fs){});
// https://raw.githubusercontent.com/txff99/txff99.github.io/main/link/link.txt
// https://api.github.com/repos/txff99/txff99.github.io/contents/link/link.txt
var LINK_SRC = "https://api.github.com/repos/txff99/txff99.github.io/contents/link/link.txt";
var DES_SRC = "https://github.com/txff99/txff99.github.io/blob/main/link/de`scription.txt"
const links = [];
const description = [];

// let headers = new Headers();

// headers['Access-Control-Allow-Origin'] = '*'
// headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
// headers['Access-Control-Request-Method'] = '*'
// headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'


// // headers.append('Content-Type', 'application/text');
// // headers.append('Accept', 'application/text');
// // headers.append('Authorization', 'Basic ' );
// // headers.append('Origin','http://localhost:3000');

const getSampleText = async()=> {
    await fetch(LINK_SRC,{
        // mode: 'cors',
        // credentials: 'include',
        // method: 'POST',
        // headers: headers
    })
      .then((res) => res.json())
      .then((text) => {
        console.log(text["content"]);
        // links.push(text)
       })
      .catch((e) => console.error(e));
  };
getSampleText();

// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", LINK_SRC);
//   oReq.send();