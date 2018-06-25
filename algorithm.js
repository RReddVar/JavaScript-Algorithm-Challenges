//uppercase the first letter of each word in a sentence

function titleCase(str) {
	var a = str.toLowerCase().split(" ");
	for (var i = 0; i < a.length; i++) {			
	  a[i] = a[i].substring(0,1).toUpperCase() + a[i].substring(1);
	}
	return a.join(' ');
}

titleCase("WORD TO BE");
