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
var DES_SRC = "https://api.github.com/repos/txff99/txff99.github.io/contents/link/description.txt"

const links = [];
const descriptions = [];
var num = -1;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

const Change_Image_Random = async()=> {
    num = -1
    await fetch(LINK_SRC,{
    })
    .then((res) => res.json())
    .then((text) => {
        const tmp_link = atob(text["content"]).split('\n');
        if(num==-1){
            num = getRandomInt(tmp_link.length);
            
        }
        console.log(tmp_link[num]);
        document.getElementById("frame").src=tmp_link[num];
        
    })
    .catch((e) => console.error(e));
        
    await fetch(DES_SRC,{
    })
    .then((res) => res.json())
    .then((text) => {
        const tmp_des = atob(text["content"]).split('\n');
        if(num==-1){
            num = getRandomInt(tmp_link.length);
        }
        document.getElementById("video_description").innerHTML=tmp_des[num];
        

    })
    .catch((e) => console.error(e));
    // return [links,descriptions];
    
    // for(var i=0;i<=links.length;++i){
    //     console.log(links[i]);
    // }
};

// const getdes = async()=> {
    // };
Change_Image_Random();
    


