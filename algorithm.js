//uppercase the first letter of each word in a sentence

function titleCase(str) {
	var a = str.toLowerCase().split(" ");
	for (var i = 0; i < a.length; i++) {			
	  a[i] = a[i].substring(0,1).toUpperCase() + a[i].substring(1);
	}
	return a.join(' ');
}

titleCase("WORD TO BE");

// Code for Caesar's Cypher

function rot13(str) { 
	var test = [];
		var track;
	for (var i = 0; i < str.length; i++) {
		var str2 = str.charCodeAt(i);

		if ((str2 < 65)) {
		      track = str2;
		      test.push(String.fromCharCode(track));
		    }

		  else if(str2 - 13 < 65) {
		    track = str2 + 13;
		    test.push(String.fromCharCode(track));
		  }

		  else {
			track = str2 -13;

		    test.push(String.fromCharCode(track));
		  }
	}
	 return test.join(''); 
}

rot13("SERR YBIR?");
