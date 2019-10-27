function xo(str) {
    strLength=str.length
    var cek1= 0
    var cek2= 0
    for (var cek = strLength-1 ;cek>=0;cek--){
        if (str[cek]==='x') {
            cek1 = cek1 +1
        } else {
            cek2 = cek2 +1
        }
    }    
    if (cek1==cek2) {
        return true
    } else {
        return false
    }
  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true