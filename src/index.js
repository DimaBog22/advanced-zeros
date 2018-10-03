module.exports = function getZerosCount(number, base) { 
    const numbers = {}; 
    const results = []; 
    const multipliers = getMultipliers(base); 
    
    Object.keys(multipliers).forEach(multiplier => { 
    const count = getSpecificNumbersCount(number, multiplier); 
    const result = Math.floor(count / multipliers[multiplier]); 
    results.push(result); 
    }); 
    
    return Math.min.apply(null, results); 
    } 
    
    function getMultipliers(base) { 
    let numbers = {}; 
    let del = 2; 
    
    while (base != 1) { 
    while (base % del != 0) { 
    del++; 
    } 
    base = base / del; 
    if (numbers[del]) { 
    numbers[del]++; 
    } else { 
    numbers[del] = 1; 
    } 
    } 
    return numbers; 
    } 
    
    
    function getSpecificNumbersCount(number, divider) { 
    let zeros = 0; 
    
    while (number > 0) { 
    number = Math.floor(number / divider); 
    zeros = zeros + number; 
    } 
    return zeros; 
    }