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


function createRange(start, end, step = 1) {
    let range = [];
    
    for (let i = start; i < end; i += step) {
        range.push(i);
    }
    
    return range;
}

class Wrapper {
    constructor() {
        this.video_links = [];
        this.video_descriptions = [];
    }

    async Init() {
        await this.GetVideoLink();
        await this.GetVideoDescription();
    }

    TrackTransaction(n) {
        //to avoid duplication
        const index = this.element_list.indexOf(n);
        this.element_list.splice(index, 1);
        if(this.element_list.length==0){
            this.element_list = createRange(0,this.content_num);
          }
    }
    
    GetRandomInt(){
        return this.element_list[Math.floor(Math.random()*this.element_list.length)];
    }
    
    PostOnHTML(){
        var num = this.GetRandomInt();
        this.TrackTransaction(num);
        console.log(this.element_list.length);
        document.getElementById("frame").src=this.video_links[num];
        document.getElementById("video_description").innerHTML=this.video_descriptions[num];
    }
    
    GetVideoLink(){
        return new Promise((resolve)=>{
            fetch(LINK_SRC,{
            })
            .then((res) => res.json())
            .then((text) => {
                this.video_links = atob(text["content"]).split('\n');
                this.content_num = this.video_links.length;
                this.element_list = createRange(0,this.content_num);
                resolve();
            })
            .catch((e) => console.error(e));
        });
    }

    GetVideoDescription(){
        return new Promise((resolve)=>{
            fetch(DES_SRC,{
            })
            .then((res) => res.json())
            .then((text) => {
                this.video_descriptions = atob(text["content"]).split('\n');
                resolve();
            })
            .catch((e) => console.error(e));
        });
    }


  };

async function InitializeWrapper(wrapper){
    await wrapper.Init();
    wrapper.PostOnHTML();
}

var wrapper = new Wrapper();
InitializeWrapper(wrapper);



