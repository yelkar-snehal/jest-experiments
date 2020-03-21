const strcmp = require('./strcmp');

describe
(
	'strcmp', ()  => 
	{
		it
		('should return 0 when two empty strings are passed', () =>
		{
			expect(strcmp('','')).toEqual(0);
		});
		
		it
		('should return 1 when \'a\' and an empty string is passed', () =>
		{
			expect(strcmp('a','')).toEqual(1);
		});
		
		it
		('should return -1 when an empty string and \'a\' is passed', () =>
		{
			expect(strcmp('','a')).toEqual(-1);
		});
		
		it
		('should return 4 when \'abab\' and an empty string is passed', () =>
		{
			expect(strcmp('abab','')).toEqual(4);
		});
		
		it
		('should return -32 when \'abAb\' and \'abab\' are passed', () =>
		{
			expect(strcmp('abAb','abab')).toEqual(-32);
		});

		it 
		('should return -4 when \'12345\' and \'12349\' are passed', () =>
			{
				expect(strcmp('12345', '12349')).toEqual(-4);
			}
		);
	}
);
