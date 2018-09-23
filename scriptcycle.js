﻿﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

function f1(){
	N=parseFloat($('tx1').value);
	var sum = 0;
	for(var i = 1; i <= N; i++)
	{
		var fact = 1;
	 	for(var j = 1; j <= i; j++)
		{
			fact = fact * j;
		} 	
		sum = sum + fact;
	}
	$('tx4').value=sum;

}

