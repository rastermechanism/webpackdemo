require('../css/style.css');
let abc = require('./namemodule.js') ;
let $ = require('jquery');


abc.forEach(function(element) {
    $('body').append('<p>'+element.name+'</p>');
}, this);