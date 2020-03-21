function strcmp(str1, str2)
{

	if (str1.length != str2.length)
	{
		return str1.length - str2.length;
	}
	
	let minlen = Math.min(str1.length, str2.length);
	let x = 0, y = 0;
	
	
	for (i = 0; i < minlen; i++)
	{
		x = str1.charCodeAt(i);
		y = str2.charCodeAt(i);
		
		//console.log(x, y);
		if(x != y)
		{
			//console.log('here');
			break;
		}
	}
	
	return x - y;
}

//console.log(strcmp('abAb','abab'));

module.exports = strcmp;
