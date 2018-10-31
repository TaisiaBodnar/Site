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
		var st = "1234567890.";
		var mass = x.split('.');
		f = "True";
		if(mass.length==3)
		{
			for(i=0;i<x.length;i++)
			{
			if(st.indexOf(x.charAt(i))<0)
			f="False";
			}
		}
		else
			f="False";
		return f;

}
		/*
		var d = Date.parse(x.replace( /[.]/g,"-"));	
		if( isNaN(d) )
			{
      		 return false;
   			}
   		else
    		{
   			 return true;
    		}
		/*
		
	}
