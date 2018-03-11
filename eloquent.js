//1. 
// Your code here.
function min(x,y) {
    if (x > y) {
      return y;
    } else if (y > x) {
      return x;
    } else {
      return x;
    }
   }
   
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
   

//2. 
function isEven(x) {
    if (x < 1) {
        return "please enter a positive number"
        }  else if (x % 1 != 0) {
            return "Please enter a whole number"
                }else if (x % 2 == 0) {
                    return true
                } else {
                    return false
                }

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(5.5));
// → ??


//3. 
// Your code here.
function countBs(string) {
  
    let count = 0;
    
   for (i = 0; i < string.length; i++) {
    if (string[i] === "B") {
        count ++
        }
   } 
    return count
  }
  
  function countChar(string, char) {
   let count = 0;
    
     for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
        count ++
        }
   } 
    return count
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlakk", "k"));
  // → 4
