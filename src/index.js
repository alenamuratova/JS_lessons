import $ from "jquery"
import summ from './utils.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import './hello.html'
//import './scss/base.scss'

var hello = require('./hello.html');
var app = document.querySelector('#app');

app.innerHTML = hello;

//var hello = require('./hello.html');



const result = summ(10, 10)
console.log(result)





