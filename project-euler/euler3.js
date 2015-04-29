var n=600851475143;
var arr=[];
for(i=0;i<n;i++){
  if (n%i===0){
    n = n/i;
    arr.push(n);
  }
}
console.log(arr[arr.length-1]);
