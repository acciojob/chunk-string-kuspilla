function stringChop(str, size) {
  // your code here
	if( size <= str.length){
		return str;
	}
	else{
		let ans = [];
		let temp = size;
		let val='';
		let ind = 0;
		for( let i=0; i<str.length; i++){

			val += str[i];
			temp--;
			if( temp == 0){
				temp = size;
				ans[ind] = val+',';
				val = '';
				ind++;
			}
		}
		return ans;
	}
}

// Do not change the code below
const str = prompt("Enter String.");

const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
