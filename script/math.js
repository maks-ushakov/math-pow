function pow(x, n) {
	var result = 1;

	if ((n < 0 )|| (Math.floor(n) !== n)) {
		return NaN;
	}

	for (var i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}