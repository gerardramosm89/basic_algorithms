


function sieve(n) {
	// Return all prime numbers up to `num` in an array
	var primes = [];
	for (let i = 0; i < n; i++ ) {
		primes[i] = true;
	}
	primes[0] = false;
	primes[1] = false;

	for (let i = 2; i < Math.sqrt(n); i++) {
		for (let j = 2; j*i <= n; j++) { // This takes cares of only handling the multiples
			primes[i * j] = false;
		}
	}
	console.log('primes is: ', primes);
	let result = [];
	primes.map((num, i) => {
		if (num) result.push(i);
	});
	console.log('result is: ', result);
}

sieve(200);

/*
	and that is it! Now we have found every single prime number in any set up to a certain number, you can implement this in any ways, but this one looks at it up to a certain number

	result is:  [ 2, 3, 5, 7, 11, 13, 17, 19 ]

	Hooray!

*/