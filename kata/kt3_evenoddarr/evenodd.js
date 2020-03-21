function evenodd(arr)
{
    if(0 == arr.length) return null;

    let sum = 0
    arr.forEach(element => {
       sum += element; 
    });

    if(0 == sum %2)
    {
        return 'even';
    }
    return 'odd';
}

module.exports = evenodd;
