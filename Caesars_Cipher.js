function rot13(str) {

    let twoAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let arrStr = str.split('');
  
    for (let i = 0; i < arrStr.length; i++) {
      if (/[A-Z]/.test(arrStr[i])) {
        arrStr[i] = twoAlphabet[twoAlphabet.indexOf(arrStr[i]) + 13];
      };
    }
  
    return arrStr.join('');
  }
  
rot13("SERR PBQR PNZC");