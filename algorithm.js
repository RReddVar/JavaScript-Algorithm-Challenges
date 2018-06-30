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

// palindrome checker

function palindrome(str) {
  
  var test = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  return test === test.split('').reverse().join("");
}

palindrome("TOM*&... HANKS");


// using slice and splice: Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {

var testArr = arr2.slice(0);  
for (var i = arr1.length-1; i >= 0; i--) {	
	  testArr.splice(n, 0, arr1[i]);
}
  return testArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
