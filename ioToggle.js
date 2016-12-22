var mraa = require('mraa');

var digitalOut1 = new mraa.Gpio(20);
digitalOut1.dir(mraa.DIR_OUT);

setTimeout(function(){
	setTimeout(function(){
		digitalOut1.write(1);
	}, 500);	
	digitalOut1.write(0);
}, 1000);
