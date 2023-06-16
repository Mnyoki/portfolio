$(document).ready(function () 
{

    $("#toggle-menu").click(function (e) {
      e.preventDefault();
      $("#main-menu-dropdown").toggle();
    });
  
})

function myhref(web) {
  window.location.href = web;
}

let tag_txt = document.getElementById("tag");

const words = ["Web Developer", "Software Engineer"];
let index = 0;

setInterval(() => {
  //console.log(words[index]);
  tag_txt.innerHTML = words[index];
  index = (index + 1) % words.length;
}, 2000);