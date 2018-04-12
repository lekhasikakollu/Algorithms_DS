(function(){
	let arr = [1,2,3,4,5];
  let n = 5;
  let d = 3;
    let rotatedArray = rotateArray(arr,n,d);
    console.log(rotatedArray.toString());
})();

function rotateArray(arr , n , d){
	for(var i=0;i<d;i++){
  	rotateArrayByOne(arr);
  }
  return arr ;
}

function rotateArrayByOne(arr){
	let first = arr.shift();
  let newArr = arr.push(first);
  return arr;
}