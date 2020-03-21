const generate = require('./util');


describe(
	'generate', () =>
	{
		it('should return an empty array when no parameters are passed', () =>
		{
			expect(generate()).toEqual([]);
		});
		
		it('should return an empty array when 1 is passed', () =>
		{
			expect(generate(1)).toEqual([]);
		});
		
		it('should return 2 when 2 is passed', () =>
		{
			expect(generate(2)).toEqual([2]);
		});
		
		it('should return 3 when 3 is passed', () =>
		{
			expect(generate(3)).toEqual([3]);
		});
		
		it('should return array[2,2] when 4 is passed', () =>
		{
			expect(generate(4)).toEqual([2,2]);
		});
		
		it('should return array[2,3] when 6 is passed', () =>
		{
			expect(generate(6)).toEqual([2,3]);
		});
		
		it('should return array[2,2,2] when 8 is passed', () =>
		{
			expect(generate(8)).toEqual([2,2,2]);
		});
		
		it('should return array[3,3] when 9 is passed', () =>
		{
			expect(generate(9)).toEqual([3,3]);
		});
		
		it('should return prime factors for number 147 as [3,3,7]', () => 
		{ 
    			expect(generate(147)).toEqual([3,7,7]);
  		});  
		
	}
);
