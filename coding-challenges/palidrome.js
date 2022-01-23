const isPalidrome = (str) => {
	let reverse = str.split('').reverse().join('');
	if (reverse.toLowerCase() === str.toLowerCase())
		console.log(`${str} is a palidrome`);
	else console.log(`${str} is not a palidrome`);
};

// true
isPalidrome('eevee');
isPalidrome('Eevee');
isPalidrome('RaceCar');
isPalidrome('-_-');

// false
isPalidrome('pikachu');
isPalidrome('helicopter');

/**
 * Alternate recursive approach under recursion dir
 */
