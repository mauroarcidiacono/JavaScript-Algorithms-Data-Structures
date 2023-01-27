function checkCashRegister(price, cash, cid) {

  const currency_amount = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]

  var r = cash - price;

  let sum = 0;
  for (let i = 0; i < cid.length; i++) {
    sum += cid[i][1];
  };

  function calc_change(cid) {
    var change = [];
    var new_cid = cid;

    while (r != 0) {
      for (var j = 0; j < currency_amount.length; j++) {
        if (r - currency_amount[j][1] > 0) {
          continue;
        } else {
          var in_max = j - 1;
          while (new_cid[in_max][1] == 0) {
            in_max -= 1;
            if (in_max < 0) {
              return 1;
            }
          }
          break;
          }
        }

      if (r < new_cid[in_max][1]) {
        let ac = 0;
        while (ac < r) {
          ac += currency_amount[in_max][1];
        }; 
        if (ac > r) {
          ac -= currency_amount[in_max][1];
          ac = Math.round(ac*100)/100;
        }
        change.push([new_cid[in_max][0], ac])
        new_cid[in_max][1] = new_cid[in_max][1] - ac; 
        r -= ac;
        r = Math.round(r*100)/100;
        }
    
      if (r >= new_cid[in_max][1]) {
        change.push([new_cid[in_max][0], new_cid[in_max][1]]) 
        r -= new_cid[in_max][1];
        r = Math.round(r*100)/100
        new_cid[in_max][1] = 0;
      }
      // console.log(r)
      // console.log(new_cid)
      // console.log(change)
    }
    return change;
  }

  if (sum < r) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (sum == r) {
    return {status: "CLOSED", change: cid};
  } else if (sum > r) {
    let ob = {status: "OPEN", change: calc_change(cid)};
    if (ob["change"] == 1) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      return ob;
    }
  }; 
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);


