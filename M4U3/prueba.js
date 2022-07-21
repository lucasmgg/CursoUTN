var moment  = require ('moment'); 
moment.locale ('es');

console.log ('Naci ' + moment('13/02/1992' , 'DD/MM/YYYY').fromNow()) 