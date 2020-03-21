const evenodd = require('./evenodd');

describe
(
    'evenodd', () => 
    {
        it
        ('should return nothing when an empty array is passed', () =>
        {
            expect(evenodd([])).toEqual(null);
        }
        );

        it
        ('should return odd when [1] is passed', () =>
        {
            expect(evenodd([1])).toEqual('odd');
        }
        );

        it
        ('should return odd when [1,2,3,4] is passed', () =>
        {
            expect(evenodd([1,2,3,4])).toEqual('even');
        }
        );
    }
);