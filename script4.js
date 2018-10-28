﻿function $() 
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

function f(x)
	{
		var d = Date.parse(x.replace( ".","-"));
		return x.replace(/[.]/g,"-");
	/*	
		if( isNaN(d) )
			{
      		 return false;
   			}
   		else
    		{
   			 return true;
    		}
		*/
	}
