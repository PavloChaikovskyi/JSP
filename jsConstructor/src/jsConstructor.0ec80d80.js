!function(){var n=document.querySelector("#site");[{type:"title",value:"Hello world from js!!!"},{type:"text",value:"here will be some text"},{type:"columns",value:["111111111","2222222222","33333333333"]},{type:"image",value:"assets/sky.jpeg"}].forEach((function(e){var t="";"title"===e.type?t=function(n){return'\n              <div class="row">\n                <div class="col-sm">\n                    <h1>'.concat(n.value,"</h1>\n                </div>\n            </div>\n        ")}(e):"text"===e.type?t=function(n){return'\n              <div class="row">\n        <div class="col-sm"></div>\n        <p>\n            '.concat(n.value,"\n        </p>\n      </div>\n        \n        ")}(e):"columns"===e.type?t=function(n){var e=n.value.map((function(n){return'<div class="col-sm"><p>'.concat(n,"</p></div>")}));return console.log(e),'\n        <div class="row">\n            '.concat(e.join(""),"\n        </html> \n    ")}(e):"image"===e.type&&(t=function(n){return'\n        <div class="row">\n            <img class="img" src="'.concat(n.value,'"> \n        </div>\n    ')}(e)),n.insertAdjacentHTML("beforeend",t)}))}();