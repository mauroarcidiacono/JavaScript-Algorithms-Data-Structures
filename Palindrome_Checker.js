function palindrome(str) {
  let strClean = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let strReverse = strClean.split('').reverse().join('');

  if (strClean == strReverse) {
    return true;
  } else {
    return false;
  }
  
}

palindrome("A man, a plan, a canal. Panama");