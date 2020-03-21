function generate(num)
{
	let primeFact = [];
	
	for(element = 2; num > 1; element ++)
	{
		for (;0 == num % element; num /= element)
		{
			primeFact.push(element);
			
		}
	}
	
	
	return primeFact;
}

module.exports = generate;
