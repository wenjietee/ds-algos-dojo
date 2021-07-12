const fizzBuzz = (input) => {
	// 1st implementation
	console.log('1st implementation');

	for (let i = 1; i <= input; i++) {
		if (i % 3 == 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}

	// 2nd implementation
	console.log('2nd implementation');

	for (let i = 1; i <= input; i++) {
		let output = '';
		if (i % 3 === 0) output += 'Fizz';
		if (i % 5 === 0) output += 'Buzz';
		if (output === '') output = i;
		console.log(output);
	}
};

fizzBuzz(15);
