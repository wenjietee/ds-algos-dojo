let steps = 4;

const countSteps = (steps) => {
	// base case, if steps takes more than 3 return steps
	if (steps <= 2) {
		return steps;
	}
	// if steps take 1 step, -1  to reduce number of steps
	// if steps take 2 steps, -2 to reduce number of steps
	return countSteps(steps - 1) + countSteps(steps - 2);
};

console.log(countSteps(steps));
