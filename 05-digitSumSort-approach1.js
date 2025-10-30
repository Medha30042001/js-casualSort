//my approach
//in bubble sort??? what was I thinking

function digitSum(num){
  let sum = 0;
  num = Math.abs(num);
  while(num>0){
    sum+=num%10;
    num=Math.floor(num/10);
  }
  return sum;
}

function SumSort(arr,n){
  let swapped = true, pass = 0;
  let sums = [];
  for(let i=0; i<n; i++) sums.push(digitSum(arr[i]));
  
  while(swapped){
    swapped = false;
    for(let j=1; j<n-pass; j++){
      if(sums[j]<sums[j-1] || sums[j]==sums[j-1] && arr[j]<arr[j-1]){
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        [sums[j], sums[j-1]] = [sums[j-1], sums[j]];
        swapped = true;
      }
    }
    pass++;
  }
  console.log(arr.join(' '));
}
