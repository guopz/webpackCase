var sub = require('./js/sub');
require('./css/a.css');
require('./less/common.less');

var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World1</h1>';
app.appendChild(sub());
document.body.appendChild(app);

let name ="a";
console.log(name);
