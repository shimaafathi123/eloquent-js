function isEven(n) {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } 
    else if(n<0){
      return -1
    }
    else {
      return isEven(n - 2);
    }
  }
  
  const ev = isEven(75);
  if(ev==-1){
      console.log("Only positive numbers")
  }
  
  else if (ev) {
      console.log("odd");
    } 
  else {
    console.log("Even");
  }
  